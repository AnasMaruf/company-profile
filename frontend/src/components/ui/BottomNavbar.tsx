import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaPlus,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTheme } from "../ThemeContext";
import { useNavigate } from "react-router-dom";

const BottomNavbar = ({ isLoggedIn }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isActive, setIsActive] = useState("home");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuActive]);
  return (
    <>
      {isMenuActive && (
        <div
          className={`flex flex-col gap-5 items-end absolute w-full h-full top-0 left-0 z-20  border-2 border-sky-500 ${
            isDarkMode ? "bg-[#0b0909] text-white" : "bg-white text-black"
          }`}
        >
          <button
            className={`w-fit h-fit text-3xl`}
            onClick={() => setIsMenuActive(false)}
          >
            <FaXmark />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDarkMode();
            }}
            className="flex justify-between border-2 border-rose-500 w-full h-fit p-2"
          >
            Change Theme
            <span>Hello</span>
          </button>
        </div>
      )}
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
          onClick={() => navigate(`${isLoggedIn ? "/profile" : "/log-in"}`)}
          className={` flex flex-col items-center justify-center gap-2 ${
            isActive == "menu"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }  `}
        >
          <FaUserCircle className="text-xl" />
          {isLoggedIn ? (
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
