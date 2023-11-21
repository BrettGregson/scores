"use client";

import React, { useState } from "react";
import Navbar from "./../components/navbar/Navbar";
import SubmitButton from "./../components/submit-button/SubmitButton";
import PageTitle from "../components/page-title/PageTitle";
import FixtureItem from "../components/fixture-item/FixtureItem";
import TipText from "../components/tip-text/TipText";
import { Score, Fixture, FixtureTeam } from "./../types";

const fixtures: Fixture[] = [
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 1,
    home: {
      teamId: 1,
      name: "Man City",
      shortName: "MCI",
      icon: "/clubs/manchester-city.png",
    },
    away: {
      teamId: 2,
      name: "Liverpool",
      shortName: "LIV",
      icon: "/clubs/liverpool.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 2,
    home: {
      teamId: 3,
      name: "Burnley",
      shortName: "BUR",
      icon: "/clubs/burnley.png",
    },
    away: {
      teamId: 4,
      name: "West Ham",
      shortName: "WHU",
      icon: "/clubs/west-ham.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 3,
    home: {
      teamId: 5,
      name: "Luton",
      shortName: "LUT",
      icon: "/clubs/luton.png",
    },
    away: {
      teamId: 6,
      name: "Crystal Palace",
      shortName: "CRY",
      icon: "/clubs/crystal-palace.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 4,
    home: {
      teamId: 7,
      name: "Newcastle",
      shortName: "NEW",
      icon: "/clubs/newcastle.png",
    },
    away: {
      teamId: 8,
      name: "Chelsea",
      shortName: "CHE",
      icon: "/clubs/chelsea.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 5,
    home: {
      teamId: 9,
      name: "Forest",
      shortName: "NFO",
      icon: "/clubs/nottingham-forest.png",
    },
    away: {
      teamId: 10,
      name: "Brighton",
      shortName: "BHA",
      icon: "/clubs/brighton.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 6,
    home: {
      teamId: 11,
      name: "Sheffield Utd",
      shortName: "SHU",
      icon: "/clubs/sheffield.png",
    },
    away: {
      teamId: 12,
      name: "Bournemouth",
      shortName: "BOU",
      icon: "/clubs/bournemouth.png",
    },
  },
  {
    matchDate: "Saturday 25 November 2023",
    matchId: 7,
    home: {
      teamId: 13,
      name: "Brentford",
      shortName: "BRE",
      icon: "/clubs/brentford.png",
    },
    away: {
      teamId: 14,
      name: "Arsenal",
      shortName: "ARS",
      icon: "/clubs/arsenal.png",
    },
  },
  {
    matchDate: "Sunday 26 November 2023",
    matchId: 8,
    home: {
      teamId: 15,
      name: "Spurs",
      shortName: "TOT",
      icon: "/clubs/spurs.png",
    },
    away: {
      teamId: 16,
      name: "Villa",
      shortName: "AVL",
      icon: "/clubs/villa.png",
    },
  },
  {
    matchDate: "Sunday 26 November 2023",
    matchId: 9,
    home: {
      teamId: 17,
      name: "Everton",
      shortName: "EVE",
      icon: "/clubs/everton.png",
    },
    away: {
      teamId: 18,
      name: "Manchester Utd",
      shortName: "MUN",
      icon: "/clubs/united.png",
    },
  },
  {
    matchDate: "Monday 27 November 2023",
    matchId: 10,
    home: {
      teamId: 19,
      name: "Fulham",
      shortName: "FUL",
      icon: "/clubs/fulham.png",
    },
    away: {
      teamId: 20,
      name: "Wolves",
      shortName: "WOL",
      icon: "/clubs/wolves.png",
    },
  },
];

const FixturesPage = () => {
  const [scores, setScores] = useState<Score[]>(() => {
    return fixtures.flatMap((fixture) => [
      { matchId: fixture.matchId, teamId: fixture.home.teamId, score: 0 },
      { matchId: fixture.matchId, teamId: fixture.away.teamId, score: 0 },
    ]);
  });

  const handleScoreChange = ({ matchId, teamId, score }: Score) => {
    const updatedScores = scores.map((existingScore) =>
      existingScore.matchId === matchId && existingScore.teamId === teamId
        ? { ...existingScore, score }
        : existingScore
    );
    setScores(updatedScores);
  };

  // Determines if the current fixture is the first occurrence of a date
  const isDateFirstOccurrence = (
    fixture: Fixture,
    index: number,
    fixtures: Fixture[]
  ): boolean => {
    return index === 0 || fixture.matchDate !== fixtures[index - 1].matchDate;
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <PageTitle title={"Fixtures"} isCentered={false} />

        <TipText text="The next score input will automatically be selected as you enter a score" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {fixtures.map((fixture, index) => (
            <FixtureItem
              index={index}
              key={fixture.matchId}
              matchDate={fixture.matchDate}
              matchId={fixture.matchId}
              home={fixture.home}
              away={fixture.away}
              scores={scores}
              handleScoreChange={handleScoreChange}
              isDateFirstOccurrence={isDateFirstOccurrence(
                fixture,
                index,
                fixtures
              )}
            />
          ))}
        </div>

        <div className="pt-4 pb-4 lg:max-w-xs">
          <SubmitButton label={"Save Scores"} />
        </div>
      </div>
    </>
  );
};

export default FixturesPage;
