import { LRUCache } from "@/shared/lib/lru";
import type { GrandMaster } from "./types";

export const grandmastersCache = new LRUCache<string, GrandMaster>(200);
