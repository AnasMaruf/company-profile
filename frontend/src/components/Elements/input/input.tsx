import React from "react";

const Input = (props) => {
  const { name, onChange, placeholder, type, value } = props;
  return (
    <input
      id={name}
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className="rounded-md p-2 bg-white text-black border-2"
    />
  );
};

export default Input;
