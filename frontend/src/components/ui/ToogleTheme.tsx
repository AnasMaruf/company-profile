import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../ThemeContext";

const ToogleTheme = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <button
      type="button"
      className=" w-fit h-fit dark:text-white text-black"
      onClick={(e) => {
        e.preventDefault();
        toggleDarkMode();
      }}
    >
      {isDarkMode ? (
        <BsFillSunFill className="text-3xl" />
      ) : (
        <BsFillMoonStarsFill className="text-3xl " />
      )}
    </button>
  );
};

export default ToogleTheme;
