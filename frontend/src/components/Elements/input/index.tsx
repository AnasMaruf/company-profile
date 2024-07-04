import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, id, placeholder, onChange, type, value } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default InputForm;
