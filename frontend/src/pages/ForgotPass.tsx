import React from "react";
// import Form from "../components/Pages/Form";
import { useTheme } from "../components/ThemeContext";
import Form from "../components/Fragments/Form";

const ForgotPass = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section className={`bg-style ${isDarkMode ? "dark" : ""}`}>
        <Form formType={`forgot-password`} />
      </section>
    </>
  );
};

export default ForgotPass;
