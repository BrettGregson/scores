import React from "react";
import { Score } from "../../types";

type ScoreInputProps = {
  scoreData: Score;
  handleScoreChange: (score: Score) => void;
};

const ScoreInput = ({
  scoreData: { matchId, teamId, score },
  handleScoreChange,
}: ScoreInputProps) => {
  return (
    <input
      type="text"
      value={score.toString()}
      className="w-full h-10 bg-transparent border-0 text-center focus:outline-none text-white text-bold"
      onChange={(e) =>
        handleScoreChange({ matchId, teamId, score: +e.target.value })
      }
      maxLength={2}
    />
  );
};

export default ScoreInput;
