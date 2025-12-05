import type { ChessApiPlayer } from "@/shared/api/chess";
import type { GrandMaster } from "./types";

export const mapChessApiPlayerToGrandMaster = (raw: ChessApiPlayer): GrandMaster => ({
  id: raw.player_id,
  username: raw.username,
  displayName: raw.name ?? raw.username,
  profileUrl: raw.url,
  avatarUrl: raw.avatar ?? null,
  countryCode: extractCountryCode(raw.country),
  lastOnline: raw.last_online ?? null,
  title: raw.title,
  joined: raw.joined ?? null,
  followers: raw.followers ?? null,
  league: raw.league ?? null,
});

const extractCountryCode = (countryUrl?: string): string | null => {
  if (!countryUrl) return null;
  const parts = countryUrl.split("/");
  return parts[parts.length - 1] || null;
};
