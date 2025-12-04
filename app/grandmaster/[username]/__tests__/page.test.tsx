// app/grandmaster/[username]/__tests__/page.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as model from "@/entities/gm/model";
import GrandMasterProfile from "../page";

describe("GrandMasterProfile", () => {
  it("loads the GM profile and shows last-online clock", async () => {
    vi.spyOn(model, "getGrandMasterByUsername").mockResolvedValue({
      username: "magnuscarlsen",
      displayName: "Magnus Carlsen",
      title: "GM",
      avatarUrl: null,
      id: 1,
      profileUrl: "",
      countryCode: "no",
      lastOnline: 1700000000,
      joined: null,
    });

    render(
      await GrandMasterProfile({
        params: Promise.resolve({ username: "magnuscarlsen" }),
      }),
    );

    expect(screen.getByText("Magnus Carlsen")).toBeTruthy();
    expect(screen.getByText(/Last time online/i)).toBeTruthy();
  });
});
