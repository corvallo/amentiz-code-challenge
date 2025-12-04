import { z } from "zod";

const schema = z.object({
  CHESS_API_BASE: z.string().url().default("https://api.chess.com/pub"),
});

export const env = schema.parse({
  CHESS_API_BASE: process.env.CHESS_API_BASE,
});
