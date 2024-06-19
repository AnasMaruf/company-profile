import React, { useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";

const Search = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const handleNavigate = (destination) => {
    navigate(`${destination}`);
  };
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log(searchParams.get("title"));
  }, []);
  return (
    <section className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar />
      Search
    </section>
  );
};

export default Search;
