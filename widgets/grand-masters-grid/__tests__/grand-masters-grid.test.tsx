import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as model from "@/entities/gm/model";
import { GrandMastersGrid } from "../grand-masters-grid";

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
        },
      ],
    });

    render(await GrandMastersGrid({ page: 1, pageSize: 2 }));
    expect(screen.getAllByRole("link", { name: /Open profile of/ })).toHaveLength(2);
  });
});
