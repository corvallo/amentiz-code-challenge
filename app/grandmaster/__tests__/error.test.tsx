import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GmError from "../error";

describe("GmError", () => {
  it("shows the italian messages and invokes reset", () => {
    const reset = vi.fn();
    render(<GmError error={new Error("boom")} reset={reset} />);

    expect(screen.getByText(/Error loading Grandmasters/i)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Retry/i }));
    expect(reset).toHaveBeenCalled();
  });
});
