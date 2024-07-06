import React, { useEffect, useState } from "react";
import { FaHome, FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTheme } from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import { useTokenStored } from "../../zustand/store";

const BottomNavbar = () => {
  const { isDarkMode } = useTheme();
  const LoginToken = useTokenStored((state) => state.token);
  const setToken = useTokenStored((state) => state.setToken);
  const [isActive] = useState("home");
  const navigate = useNavigate();


  const test = () => {
    setToken("12345");
  };

  return (
    <>
      <nav className="flex justify-between px-10 py-2 md:hidden sticky bottom-0 left-0 z-10 w-full h-fit bg-white dark:bg-[#0b0909] border-t-2 border-[#9EA8C4] rounded-t-2xl">
        <button
          type="button"
          className={` flex flex-col items-center justify-center gap-2 ${
            isActive == "home"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          } `}
        >
          <FaHome className="text-xl" />
          <p className="text-xs">Home</p>
        </button>
        <button
          type="button"
          onClick={test}
          className={` flex flex-col items-center justify-center gap-2 ${
            isActive == "new-post"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }  `}
        >
          <FaPlus className="text-xl" />
          <p className="text-xs">New Post</p>
        </button>
        <button
          type="button"
          onClick={() => navigate("/search")}
          className={` flex flex-col items-center justify-center gap-2 ${
            isActive == "search"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }  `}
        >
          <FaSearch className="text-xl" />
          <p className="text-xs">Search</p>
        </button>

        <button
          type="button"
          onClick={() => navigate(`${LoginToken ? "/profile" : "/log-in"}`)}
          className={` flex flex-col items-center justify-center gap-2 ${
            isActive == "menu"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }  `}
        >
          <FaUserCircle className="text-xl" />
          {LoginToken ? (
            <p className="text-xs">Profile</p>
          ) : (
            <p className="text-xs">Login</p>
          )}
        </button>
      </nav>
    </>
  );
};

export default BottomNavbar;
