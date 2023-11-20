import React, { useEffect, useRef } from "react";
import { Score } from "../../types";

type ScoreInputProps = {
  scoreData: Score;
  handleScoreChange: (score: Score) => void;
  onFocusChange: () => void;
  inputNumber: number;
  groupId: number;
};

const ScoreInput = ({
  scoreData: { matchId, teamId, score },
  handleScoreChange,
  onFocusChange,
  inputNumber,
  groupId,
}: ScoreInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (groupId === 1 && inputNumber === 1) {
      const elementToFocus = document.getElementById(`score-input-${0}-${1}`);
      if (elementToFocus instanceof HTMLInputElement) {
        console.log("focus first");
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
  }, [groupId, inputNumber]); // Dependencies to ensure this runs when groupId or inputNumber changes

  const handleFocus = () => {
    onFocusChange();
  };

  const tabToNextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = e.target.value;
    handleScoreChange({ matchId, teamId, score: +newScore });
    if (newScore.length === 1) {
      const siblingId =
        inputNumber === 2
          ? `score-input-${groupId + 1}-${1}`
          : `score-input-${groupId}-${inputNumber + 1}`;
      const nextSibling = document.getElementById(siblingId);
      if (nextSibling instanceof HTMLInputElement) {
        nextSibling.focus();
        nextSibling.select();
      }
    }
  };

  return (
    <input
      ref={groupId === 1 && inputNumber === 1 ? inputRef : null}
      id={`score-input-${groupId}-${inputNumber}`}
      type="text"
      value={score.toString()}
      className="w-full h-10 bg-transparent border-0 text-center focus:outline-none text-white text-bold"
      onChange={tabToNextOnChange}
      onFocus={handleFocus}
      maxLength={1}
    />
  );
};

export default ScoreInput;
