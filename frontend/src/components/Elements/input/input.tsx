import React from "react";

const Input = (props) => {
  const { name, onChange, placeholder, type, value, inputClassName } = props;
  return (
    <input
      id={name}
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${inputClassName}`}
    />
  );
};

export default Input;
