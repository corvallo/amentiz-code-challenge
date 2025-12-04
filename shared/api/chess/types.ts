export type ChessApiTitledResponse = {
  players: string[];
};

export type ChessApiPlayer = {
  username: string;
  player_id: number;
  url: string;
  name?: string;
  avatar?: string;
  country?: string;
  last_online?: number;
  joined?: number;
  status?: string;
  league?: string;
  title: string;
};
