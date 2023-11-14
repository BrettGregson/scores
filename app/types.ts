export type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

export type Score = {
  matchId: number;
  teamId: number;
  score: number;
};