export type GrandMaster = {
  id: number;
  username: string;
  displayName: string;
  profileUrl: string;
  avatarUrl: string | null;
  countryCode: string | null;
  lastOnline: number | null;
  joined: number | null;
  title: string;
};

export interface GetGrandMasterResponse {
  items: GrandMaster[];
  total: number;
}
