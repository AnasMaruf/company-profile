import React from "react";

const Button = (props) => {
  const { children, className, type, onClick } = props;
  return (
    <>
      <button
        className=" items-center justify-center py-3 rounded-md bg-black text-white w-full mt-3"
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
