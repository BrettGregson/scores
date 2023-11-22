import React from "react";

type SubmitButtonProps = {
  label: string;
  isLoading?: boolean;
};

const SubmitButton = ({ label, isLoading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-violet-800 px-3 py-2.5 text-sm font-semibold leading-6 text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isLoading ? <div className="loading"></div> : label}
    </button>
  );
};

export default SubmitButton;
