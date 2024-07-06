import React from "react";
import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    onChange,
    type,
    value,
    inputClassName,
    labelClassName,
  } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label
        htmlFor={name}
        labelClassName={labelClassName}
      >
        {label}
      </Label>
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        inputClassName={inputClassName}
      />
    </div>
  );
};

export default InputForm;
