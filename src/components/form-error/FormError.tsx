import React from "react";

type FormErrorProps = {
  text: string;
};

const FormError = ({ text }: FormErrorProps) => {
  return <p className="text-red-500 text-xs">{text}</p>;
};

export default FormError;
