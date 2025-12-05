// shared/components/pagination/__tests__/pagination.test.tsx
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Pagination } from "../pagination";

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });
  it("disables Prev on first page and enables Next", () => {
    render(<Pagination page={1} totalPages={3} basePath="/grandmaster" />);
    const nav = screen.getByRole("navigation");
    const prev = within(nav).getByText("Prev");
    const next = within(nav).getByText("Next");

    expect(prev.className).toContain("pointer-events-none");
    expect(next.getAttribute("href")).toBe("/grandmaster?page=2");
  });

  it("disables Next on last page", () => {
    render(<Pagination page={3} totalPages={3} basePath="/grandmaster" />);
    const nav = screen.getByRole("navigation");
    const next = within(nav).getByText("Next");

    expect(next.className).toContain("pointer-events-none");
  });
});
