import React, { useEffect, useState } from "react";
// import Form from "../components/Pages/Form";
import { useTheme } from "../components/ThemeContext";
import ToogleTheme from "../components/ui/ToogleTheme";
import Form from "../components/Fragments/Form";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { LoginForm } from "../components/Fragments/LoginForm";

const LogIn = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section className={`bg-style ${isDarkMode ? "" : ""}`}>
        <AuthLayout type="log-in">
          <LoginForm />
        </AuthLayout>
      </section>
    </>
  );
};

export default LogIn;
