import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { computeTimeDiff } from "../time-utils";

const fixedNow = new Date("2024-01-01T12:00:00Z").getTime();

describe("computeTimeDiff", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedNow);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns zeros when timestamp is null", () => {
    expect(computeTimeDiff(null)).toBe("00:00:00");
  });

  it("formats difference as HH:MM:SS", () => {
    const fiveHoursAgo = fixedNow / 1000 - 5 * 3600 - 12 * 60 - 34;
    expect(computeTimeDiff(fiveHoursAgo)).toBe("05:12:34");
  });

  it("never returns negative values", () => {
    const futureTimestamp = fixedNow / 1000 + 10;
    expect(computeTimeDiff(futureTimestamp)).toBe("00:00:00");
  });
});
