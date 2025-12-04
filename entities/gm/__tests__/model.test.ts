// entities/gm/__tests__/model.test.ts
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as chessApi from "@/shared/api/chess";
import { getGrandMasterByUsername, getGrandMasters } from "../model";
import type { GrandMaster } from "../types";

vi.mock("@/entities/gm/cache", async () => {
  const { LRUCache } = await vi.importActual<typeof import("@/shared/lib/lru")>("@/shared/lib/lru");
  const cache = new LRUCache<string, GrandMaster>(200);
  return {
    grandmastersCache: cache,
    __resetCache: () => cache["map"].clear(),
  };
});

const { __resetCache } = vi.mocked(await import("@/entities/gm/cache")) as unknown as { __resetCache: () => void };

const mockPlayers = Array.from({ length: 5 }, (_, i) => `player${i}`);

describe("getGrandMasters", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    __resetCache();

    vi.spyOn(chessApi, "fetchGMUsernames").mockResolvedValue(mockPlayers);
    vi.spyOn(chessApi, "fetchPlayer").mockImplementation(async (username) => ({
      username,
      player_id: 1,
      url: `url/${username}`,
      title: "GM",
    }));
  });

  it("returns paginated items", async () => {
    const { items, total } = await getGrandMasters(0, 2);
    expect(total).toBe(5);
    expect(items.map((gm) => gm.username)).toEqual(["player0", "player1"]);
  });

  it("memoizes getGrandMasterByUsername via cache", async () => {
    const fetchPlayerSpy = chessApi.fetchPlayer as ReturnType<typeof vi.spyOn>;

    await getGrandMasterByUsername("unique-player");
    await getGrandMasterByUsername("unique-player");

    expect(fetchPlayerSpy).toHaveBeenCalledTimes(1);
  });
});
