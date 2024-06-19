import React from "react";
import {
  FaUserCircle,
  FaRegFontAwesomeLogoFull,
  FaSearch,
} from "react-icons/fa";
import ToogleTheme from "./ToogleTheme";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 justify-between absolute top-0 left-0 min-w-full h-12 border-b-2 border-gray-600 items-center px-5 py-7 bg-transparent font-roboto max-md:hidden">
      <FaRegFontAwesomeLogoFull
        className="flex-[0.25] hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <SearchBar />
      <div className="flex flex-[0.3]  gap-7 items-center h-11">
        <button className="flex justify-center items-center font-semibold border-2 text-left  dark:bg-white text-black hover:cursor-pointer rounded-lg w-28 h-9">
          New Post
        </button>

        <ToogleTheme />
        <FaUserCircle className="text-3xl " />
      </div>
    </div>
  );
};

export default TopNavbar;
