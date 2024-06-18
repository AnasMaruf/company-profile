import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useTheme } from "../components/ThemeContext";
import ToogleTheme from "../components/ui/ToogleTheme";

const LogIn = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section className={`bg-style ${isDarkMode ? "dark" : ""}`}>
        <ToogleTheme />
        <Form formType={`log-in`} />
      </section>
    </>
  );
};

export default LogIn;
