import { fetchGMUsernames, fetchPlayer } from "@/shared/api/chess";
import { appConfig } from "@/shared/config/app-config";
import { grandMastersDetailCache, grandMastersUsernameCache } from "./cache";
import { mapChessApiPlayerToGrandMaster } from "./mapper";
import type { GetGrandMasterResponse, GrandMaster } from "./types";

const PAGE_SIZE = appConfig.GM_PAGE_SIZE;
const TTL = appConfig.GM_CACHE_TTL_SECONDS;

async function mapWithConcurrency<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      results[currentIndex] = await fn(items[currentIndex]);
    }
  }

  const workers = Array.from({ length: limit }, () => worker());
  await Promise.all(workers);
  return results;
}

export const getGrandMasters = async (page = 0, limit = PAGE_SIZE): Promise<GetGrandMasterResponse> => {
  const cached = grandMastersUsernameCache.get("all_gm_usernames");
  let usernames: string[] = [];

  if (cached) usernames = cached;
  else {
    usernames = await fetchGMUsernames();
    grandMastersUsernameCache.set("all_gm_usernames", usernames, TTL);
  }

  const total = usernames.length;

  const start = page * limit;
  const end = start + limit;
  const pagedUsernames = usernames.slice(start, end);

  const items = await mapWithConcurrency(pagedUsernames, appConfig.API_FETCH_CONCURRENCY, async (u) =>
    getGrandMasterByUsername(u),
  );

  return { items, total };
};

export const getGrandMasterByUsername = async (username: string): Promise<GrandMaster> => {
  const key = username.toLowerCase();
  const cached = grandMastersDetailCache.get(key);
  if (cached) return cached;
  const raw = await fetchPlayer(key);
  const gm = mapChessApiPlayerToGrandMaster(raw);
  grandMastersDetailCache.set(key, gm, TTL);
  return gm;
};

export const getGrandMastersCount = async () => {
  const usernames = await fetchGMUsernames();
  return usernames.length;
};
