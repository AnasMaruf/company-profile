import React from "react";

const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="font-roboto font-light tracking-wider">
      {children}
    </label>
  );
};

export default Label;
