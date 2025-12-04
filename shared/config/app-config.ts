import { z } from "zod";

const appConfigSchema = z.object({
  GM_PAGE_SIZE: z.coerce.number().int().min(10).max(500).default(100).catch(100),
  GM_CACHE_CAPACITY: z.coerce.number().int().min(50).max(2000).default(300).catch(300),
  GM_CACHE_TTL_SECONDS: z.coerce.number().int().min(60).max(3600).default(300).catch(300),
});

export const appConfig = appConfigSchema.parse({
  GM_PAGE_SIZE: process.env.GM_PAGE_SIZE,
  GM_CACHE_CAPACITY: process.env.GM_CACHE_CAPACITY,
  GM_CACHE_TTL_SECONDS: process.env.GM_CACHE_TTL_SECONDS,
});
