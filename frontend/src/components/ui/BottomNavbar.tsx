import React from "react";
import { FaHome, FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useTokenStored } from "../../zustand/store";

const BottomNavbar = () => {
  const userToken = useTokenStored((state) => state.tokenBlogAy);
  const setToken = useTokenStored((state) => state.setToken);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav className="flex justify-between px-10 py-2 md:hidden sticky bottom-0 left-0 z-10 w-full h-fit bg-white dark:bg-[#0b0909] border-t-2 border-[#9EA8C4] rounded-t-2xl">
        <button
          type="button"
          onClick={() => navigate("/")}
          className={` flex flex-col items-center justify-center gap-2 ${
            location.pathname.toString() == "/"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          } `}
        >
          <FaHome className="text-xl" />
          <p className="text-xs">Home</p>
        </button>
        <button
          type="button"
          onClick={() => navigate("/new-post")}
          className={` flex flex-col items-center justify-center gap-2 ${
            location.pathname.toString() == "/new-post"
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
            location.pathname.toString() == "/search"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }  `}
        >
          <FaSearch className="text-xl" />
          <p className="text-xs">Search</p>
        </button>

        <button
          type="button"
          onClick={() =>
            navigate(`${userToken ? "/profile" : "/log-in"}`)
          }
          className={` flex flex-col items-center justify-center gap-2 ${
            location.pathname.toString() == "/profile"
              ? "dark:text-white text-[#0b0909]"
              : "text-[#9EA8C4] "
          }   `}
        >
          <FaUserCircle className="text-xl" />
          {userToken ? (
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
