import React from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import ToogleTheme from "./ToogleTheme";
import { useNavigate, useLocation } from "react-router-dom";
import { useTokenStored } from "../../zustand/store";

// Komponen menampilkan menu, bila ukuran layar tablet keatas jadi floating menu kanan atas, bila smartphone jadi kanan bawah
const FloatingMenu = ({ isActive }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const setToken = useTokenStored((state) => state.setToken);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    if (location.pathname === "/profile" || location.pathname === "/new-post")
      navigate("/");
  };
  return (
    <div
      className={` ease-linear duration-150 absolute w-fit h-fit right-20 top-16 px-2 rounded-lg dark:bg-[#0b0909] bg-white border-2 border-gray-600 font-lato tracking-wider ${
        isActive ? "visible" : "invisible"
      }`}
    >
      <ul className="flex flex-col justify-start w-full h-full">
        {/* Ke buat condition men user is logged in or not */}
        <li
          onClick={(e) => {
            navigate("/profile");
          }}
          className={`flex items-center justify-start gap-2 min-w-28 text-md px-2 py-4 hover:cursor-pointer border-b-2 border-black dark:border-gray-500`}
        >
          <FaUserCircle /> Profile
        </li>
        <li
          onClick={handleLogout}
          className={`flex items-center justify-start gap-2 min-w-28 text-md px-2 py-4 hover:cursor-pointer `}
        >
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default FloatingMenu;
