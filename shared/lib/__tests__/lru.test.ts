import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LRUCache } from "../lru";

describe("LRUCache", () => {
  it("stores and retrieves values", () => {
    const cache = new LRUCache<string, number>(2);
    cache.set("a", 1);
    expect(cache.get("a")).toBe(1);
  });

  it("evicts least recently used entry when capacity exceeded", () => {
    const cache = new LRUCache<string, number>(2);
    cache.set("a", 1);
    cache.set("b", 2);
    cache.get("a");
    cache.set("c", 3);
    expect(cache.get("b")).toBeNull();
    expect(cache.get("a")).toBe(1);
    expect(cache.get("c")).toBe(3);
  });

  describe("TTL expiration", () => {
    const now = new Date("2024-01-01T00:00:00Z").getTime();

    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(now);
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("expires entries after ttl", () => {
      const cache = new LRUCache<string, number>(2);
      cache.set("a", 1, 1);
      vi.advanceTimersByTime(2000);
      expect(cache.get("a")).toBeNull();
    });
  });
});
