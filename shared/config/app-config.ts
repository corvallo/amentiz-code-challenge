import { z } from "zod";

const appConfigSchema = z.object({
  API_FETCH_CONCURRENCY: z.coerce.number().int().min(2).max(10).default(10).catch(10),
  GM_PAGE_SIZE: z.coerce.number().int().min(10).max(500).default(100).catch(100),
  GM_CACHE_CAPACITY_DETAIL: z.coerce.number().int().min(50).max(2000).default(300).catch(300),
  GM_CACHE_CAPACITY_USERNAMES: z.coerce.number().int().min(50).max(10000).default(2500).catch(2500),
  GM_CACHE_TTL_SECONDS: z.coerce.number().int().min(60).max(3600).default(300).catch(300),
});

export const appConfig = appConfigSchema.parse({
  API_FETCH_CONCURRENCY: process.env.API_FETCH_CONCURRENCY,
  GM_PAGE_SIZE: process.env.GM_PAGE_SIZE,
  GM_CACHE_CAPACITY: process.env.GM_CACHE_CAPACITY,
  GM_CACHE_TTL_SECONDS: process.env.GM_CACHE_TTL_SECONDS,
  GM_CACHE_CAPACITY_USERNAMES: process.env.GM_CACHE_CAPACITY_USERNAMES,
});
