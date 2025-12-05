import { env } from "@/shared/config/env";
import { ChessApiError } from "./error";

export const chessApiRequest = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const url = `${env.CHESS_API_BASE}${path}`;
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new ChessApiError(`Chess API error on ${url}`, res.status);
  }
  return res.json() as Promise<T>;
};
