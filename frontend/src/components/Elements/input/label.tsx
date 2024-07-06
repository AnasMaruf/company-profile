import React from "react";

const Label = ({ children, htmlFor, labelClassName }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${labelClassName}`}
    >
      {children}
    </label>
  );
};

export default Label;
