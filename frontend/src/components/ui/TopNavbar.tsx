import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaRegFontAwesomeLogoFull,
} from "react-icons/fa";
import ToogleTheme from "./ToogleTheme";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const TopNavbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [isTopNavbarVisible, setIsTopNavbarVisible] = useState(true);
  const handleClickLogo = () => {
    navigate("/");
    window.location.reload();
  };

  // topnavbar animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > currentScrollY + 7) {
        setIsTopNavbarVisible(false);
      } else if (scrollY < currentScrollY) {
        setIsTopNavbarVisible(true);
      }
      setCurrentScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollY]);
  return (
    <nav
      className={`flex gap-5 justify-between sticky top-0 left-0 z-10 min-w-full h-12 border-b items-center px-5 py-7 bg-transparent font-roboto max-md:hidden bg-white dark:bg-[#0b0909] ${
        isTopNavbarVisible
          ? "visible translate-y-0 duration-150 ease-in"
          : "invisible -translate-y-16 duration-300 ease-out"
      }`}
    >
      <FaRegFontAwesomeLogoFull
        className="flex-[0.25] hover:cursor-pointer"
        onClick={handleClickLogo}
      />
      <SearchBar />
      <div className="flex flex-[0.3]  gap-7 items-center h-11">
        <button className="flex justify-center items-center font-semibold border-2 text-left  bg-white text-black hover:cursor-pointer rounded-lg w-28 h-9">
          New Post
        </button>

        <ToogleTheme />
        <FaUserCircle className="text-3xl " />
      </div>
    </nav>
  );
};

export default TopNavbar;
