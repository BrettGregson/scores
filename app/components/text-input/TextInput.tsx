import React from "react";

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <>
      <label htmlFor="email" className="block text-sm font-medium leading-6 ">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 p-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default TextInput;
