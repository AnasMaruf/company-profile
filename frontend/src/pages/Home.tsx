import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import { useTheme } from "../components/ThemeContext";
import BottomNavbar from "../components/ui/BottomNavbar";

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const handleNavigate = (destination) => {
    navigate(`${destination}`);
  };
  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <section className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
        <TopNavbar />
        Home
        <div>
          <button
            className="border-2 p-3 border-white rounded-full"
            onClick={() => handleNavigate("/log-in")}
          >
            To Login
          </button>
          <button
            className="border-2 p-3 border-white rounded-full"
            onClick={() => handleNavigate("/sign-up")}
          >
            To Sign Up
          </button>
        </div>
        <Footer />
        <BottomNavbar />
      </section>
    </>
  );
};

export default Home;
