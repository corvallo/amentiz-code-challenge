import { beforeEach, describe, expect, it, vi } from "vitest";
import * as chessApi from "@/shared/api/chess";
import { grandMastersDetailCache, grandMastersUsernameCache } from "../cache";
import { getGrandMasterByUsername, getGrandMasters } from "../model";

const clearCache = (cache: unknown) => {
  const map: Map<string, unknown> | undefined = (cache as { map?: Map<string, unknown> }).map;
  map?.clear();
};

const mockPlayers = Array.from({ length: 5 }, (_, i) => `player${i}`);

describe("getGrandMasters", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    clearCache(grandMastersUsernameCache);
    clearCache(grandMastersDetailCache);

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
