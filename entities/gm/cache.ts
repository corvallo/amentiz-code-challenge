import { appConfig } from "@/shared/config/app-config";
import { LRUCache } from "@/shared/lib/lru";
import type { GrandMaster } from "./types";

export const grandMastersUsernameCache = new LRUCache<string, GrandMaster["username"][]>(
  appConfig.GM_CACHE_CAPACITY_USERNAMES,
);
export const grandMastersDetailCache = new LRUCache<string, GrandMaster>(appConfig.GM_CACHE_CAPACITY_DETAIL);
