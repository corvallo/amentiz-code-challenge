import { render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ElapsedTime } from "../elapsed-time";

const fixedDate = new Date("2024-01-01T12:00:00Z");

describe("ElapsedTime", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders placeholder when lastOnline is null", () => {
    render(<ElapsedTime lastOnline={null} />);
    expect(screen.getByText("00:00:00")).toBeTruthy();
  });

  it("updates the elapsed time every second", () => {
    const lastOnline = Math.floor(fixedDate.getTime() / 1000) - 30;
    render(<ElapsedTime lastOnline={lastOnline} />);

    expect(screen.getByText("00:00:30")).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("00:00:32")).toBeTruthy();
  });
});
