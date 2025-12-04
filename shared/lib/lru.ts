export class LRUCache<K, V> {
  private capacity: number;
  private map: Map<K, { value: V; expiresAt: number | null }>;

  constructor(capacity: number = 100) {
    this.capacity = capacity;
    this.map = new Map();
  }

  private isExpired(entry: { value: V; expiresAt: number | null }) {
    return entry.expiresAt !== null && Date.now() > entry.expiresAt;
  }

  get(key: K): V | null {
    const entry = this.map.get(key);
    if (!entry) return null;

    // TTL expired
    if (this.isExpired(entry)) {
      this.map.delete(key);
      return null;
    }

    // Refresh recency (move to end of Map)
    this.map.delete(key);
    this.map.set(key, entry);

    return entry.value;
  }

  set(key: K, value: V, ttlSeconds?: number): void {
    const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : null;

    // If exists, remove to refresh ordering
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, { value, expiresAt });

    // removes least recently used
    if (this.map.size > this.capacity) {
      const leastUsedKey = this.map.keys().next().value;
      if (leastUsedKey) this.map.delete(leastUsedKey);
    }
  }
  size(): number {
    return this.map.size;
  }

  keys(): K[] {
    return Array.from(this.map.keys());
  }
}
