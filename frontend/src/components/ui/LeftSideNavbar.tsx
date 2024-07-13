import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LeftSideNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="max-md:hidden h-screen z-0 border-r-2 border-gray-500">
      <ul className="w-40 font-roboto font-semibold text-lg space-y-5 py-4">
        <li
          onClick={() => navigate("/profile")}
          className={`cursor-pointer  p-2 w-full h-full ${
            location.pathname === "/profile"
              ? "text-sky-400"
              : "dark:text-white text-black"
          }`}
        >
          Profile
        </li>
        <li
          onClick={() => navigate("/my-posts")}
          className={`cursor-pointer  p-2 w-full h-full ${
            location.pathname === "/my-posts"
              ? "text-sky-400"
              : "dark:text-white text-black"
          }`}
        >
          My posts
        </li>
      </ul>
    </nav>
  );
};

export default LeftSideNavbar;
