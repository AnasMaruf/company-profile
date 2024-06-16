import React from "react";
import Form from "../components/Form";
import { useTheme } from "../components/ThemeContext";

const ForgotPass = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section
        className={`flex flex-col gap-5 items-center justify-center w-full min-h-full dark:text-black text-white dark:bg-[#0B0909] ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <Form formType={`forgot-password`} />
      </section>
    </>
  );
};

export default ForgotPass;
