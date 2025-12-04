import { chessApiRequest } from "./client";
import type { ChessApiPlayer, ChessApiTitledResponse } from "./types";

export const fetchGMUsernames = async (): Promise<string[]> => {
  const data = await chessApiRequest<ChessApiTitledResponse>("/titled/GM", {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });
  return data.players;
};

export const fetchPlayer = async (username: string): Promise<ChessApiPlayer> => {
  return await chessApiRequest<ChessApiPlayer>(`/player/${username.toLowerCase()}`);
};
