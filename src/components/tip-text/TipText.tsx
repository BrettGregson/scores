import React from "react";
import Image from "next/image";

type TipTextProps = {
  text: string;
};

const TipText = ({ text }: TipTextProps) => {
  return (
    <p className="bg-slate-200 inline-block rounded p-2 px-2 text-slate-600 text-sm mt-2">
      <Image
        src="/icons/bulb.svg"
        alt=""
        width={16}
        height={16}
        className="inline-block mr-2 opacity-60"
      />
      {text}
    </p>
  );
};

export default TipText;
