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

export type FixtureTeam = {
  teamId: number;
  name: string;
  shortName: string;
  icon: string;
}

export type Fixture = {
  matchDate: string;
  matchId: number;
  home: FixtureTeam,
  away: FixtureTeam
};