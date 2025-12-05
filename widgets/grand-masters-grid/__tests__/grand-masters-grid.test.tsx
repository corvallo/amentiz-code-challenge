import { render, screen } from "@testing-library/react";
import { act, type ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import * as model from "@/entities/gm/model";
import { GrandMastersGrid } from "../grand-masters-grid";

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: ComponentProps<"a">) => <a {...props}>{children}</a>,
}));

describe("GrandMastersGrid", () => {
  it("renders one card per item", async () => {
    vi.spyOn(model, "getGrandMasters").mockResolvedValue({
      total: 2,
      items: [
        {
          username: "gm1",
          displayName: "GM One",
          title: "GM",
          avatarUrl: null,
          countryCode: null,
          id: 1,
          profileUrl: "",
          lastOnline: null,
          joined: null,
          followers: 0,
          league: "league",
        },
        {
          username: "gm2",
          displayName: "GM Two",
          title: "GM",
          avatarUrl: null,
          countryCode: null,
          id: 2,
          profileUrl: "",
          lastOnline: null,
          joined: null,
          followers: 12,
          league: "league",
        },
      ],
    });

    await act(async () => {
      render(await GrandMastersGrid({ page: 1, pageSize: 2 }));
    });
    expect(screen.getAllByRole("link", { name: /Open profile of/ })).toHaveLength(2);
  });
});
