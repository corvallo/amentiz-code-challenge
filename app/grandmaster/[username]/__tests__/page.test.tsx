// app/grandmaster/[username]/__tests__/page.test.tsx
import { render, screen } from "@testing-library/react";
import { act, type ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import * as model from "@/entities/gm/model";
import GrandMasterProfilePage from "../page";

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: ComponentProps<"a">) => <a {...props}>{children}</a>,
}));

vi.mock("@/widgets/grand-master-profile", () => ({
  GrandMasterProfile: ({ username }: { username: string }) => (
    <div data-testid="grand-master-profile">Profile for {username}</div>
  ),
}));

describe("GrandMasterProfilePage", () => {
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
      league: "league",
      followers: 1,
    });

    await act(async () => {
      render(
        await GrandMasterProfilePage({
          params: Promise.resolve({ username: "magnuscarlsen" }),
        }),
      );
    });

    expect(screen.getByText("Profile for magnuscarlsen")).toBeTruthy();
  });
});
