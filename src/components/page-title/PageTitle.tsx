import React from "react";

type PageTitleProps = {
  title: string;
  isCentered: boolean;
};

const PageTitle = ({ title, isCentered }: PageTitleProps) => {
  const classes = isCentered
    ? "mt-10 text-2xl font-bold leading-9 tracking-tight text-emerald-800"
    : "mt-10 text-2xl font-bold leading-9 tracking-tight text-emerald-800";
  return <h2 className={classes}>{title}</h2>;
};

export default PageTitle;
