import React from "react";
import Image from "next/image";
import ScoreInput from "../score-input/ScoreInput";
import { Score, Fixture } from "./../../types";

type FixtureItemProps = Fixture & {
  isDateFirstOccurrence: boolean;
  scores: Score[];
  handleScoreChange: (score: Score) => void;
};

const FixtureItem = ({
  matchDate,
  matchId,
  home,
  away,
  isDateFirstOccurrence,
  scores,
  handleScoreChange,
}: FixtureItemProps) => {
  return (
    <>
      {isDateFirstOccurrence && (
        <div className="col-span-1 lg:col-span-2 pt-6">
          <h4 className="font-bold text-slate-700 text-bold">{matchDate}</h4>
        </div>
      )}

      <div
        className="p-2 bg-white rounded-md text-gray-900 border border-slate-300"
        key={matchId}
      >
        <div className="grid grid-cols-[auto,1fr,auto,1fr,auto] items-center">
          <div className="w-12">
            <Image
              src={home.icon}
              alt={home.name}
              width={48}
              height={48}
              className="w-auto"
            />
          </div>

          <div className="text-center font-bold text-slate-700 text-sm">
            {home.name}
          </div>

          <div className="w-20 flex flex-grow bg-emerald-800 items-center rounded-md font-bold">
            <div className="flex-grow">
              <ScoreInput
                scoreData={{
                  matchId: matchId,
                  teamId: home.teamId,
                  score:
                    scores.find(
                      (s) => s.matchId === matchId && s.teamId === home.teamId
                    )?.score || 0,
                }}
                handleScoreChange={handleScoreChange}
              />
            </div>

            <div className="w-12 text-white text-bold text-center opacity-50">
              :
            </div>

            <div className="flex-grow">
              <ScoreInput
                scoreData={{
                  matchId: matchId,
                  teamId: away.teamId,
                  score:
                    scores.find(
                      (s) => s.matchId === matchId && s.teamId === away.teamId
                    )?.score || 0,
                }}
                handleScoreChange={handleScoreChange}
              />
            </div>
          </div>

          <div className="text-center font-bold text-slate-700 text-sm">
            {away.name}
          </div>

          <div className="w-12">
            <Image
              src={away.icon}
              alt={away.name}
              width={48}
              height={48}
              className="w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixtureItem;
