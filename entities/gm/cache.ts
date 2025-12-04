import { appConfig } from "@/shared/config/app-config";
import { LRUCache } from "@/shared/lib/lru";
import type { GrandMaster } from "./types";

export const grandmastersCache = new LRUCache<string, GrandMaster>(appConfig.GM_CACHE_CAPACITY);
