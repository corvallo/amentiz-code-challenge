import { cleanup, render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as model from "@/entities/gm/model";
import { GrandMasterProfile } from "../grand-master-profile";

vi.mock("@/features/profile-card", () => ({
  ProfileCard: ({ displayName }: { displayName: string }) => <div data-testid="profile-card">{displayName}</div>,
}));

vi.mock("@/features/elapsed-time", () => ({
  ElapsedTime: ({ lastOnline }: { lastOnline: number }) => <span>Elapsed {lastOnline}</span>,
}));

vi.mock("@/features/stats-card", () => ({
  StatsCard: ({ title, value, children }: { title: string; value?: number | string; children?: React.ReactNode }) => (
    <div data-testid={`stats-${title}`}>
      {title}:{value ?? null} {children}
    </div>
  ),
}));

describe("GrandMasterProfile", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders profile card and optional stats when data is available", async () => {
    vi.spyOn(model, "getGrandMasterByUsername").mockResolvedValue({
      username: "gm1",
      displayName: "GM One",
      title: "GM",
      avatarUrl: null,
      lastOnline: 1700000000,
      followers: 42,
      league: "Legends",
      id: 1,
      profileUrl: "",
      countryCode: null,
      joined: 0,
    });

    await act(async () => {
      render(await GrandMasterProfile({ username: "gm1" }));
    });

    expect(screen.getByTestId("profile-card").textContent).toContain("GM One");
    expect(screen.getByTestId("stats-Last time online").textContent).toContain("Elapsed 1700000000");
    expect(screen.getByTestId("stats-Followers").textContent).toContain("Followers:42");
    expect(screen.getByTestId("stats-League").textContent).toContain("Legends");
  });

  it("omits optional stats when data is missing", async () => {
    vi.spyOn(model, "getGrandMasterByUsername").mockResolvedValue({
      username: "gm2",
      displayName: "GM Two",
      title: "GM",
      avatarUrl: null,
      lastOnline: null,
      followers: null,
      league: null,
      id: 2,
      profileUrl: "",
      countryCode: null,
      joined: 0,
    });

    await act(async () => {
      render(await GrandMasterProfile({ username: "gm2" }));
    });

    expect(screen.queryByTestId("stats-Last time online")).toBeNull();
    expect(screen.queryByTestId("stats-Followers")).toBeNull();
    expect(screen.queryByTestId("stats-League")).toBeNull();
  });
});
