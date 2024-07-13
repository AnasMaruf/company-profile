import React, { useEffect, useState } from "react";
import TopNavbar from "../components/ui/TopNavbar";
import BottomNavbar from "../components/ui/BottomNavbar";
import { useTheme } from "../components/ThemeContext";
import LeftSideNavbar from "../components/ui/LeftSideNavbar";
import { useTokenStored } from "../zustand/store";
import { userProps } from "../../types";
import axios from "axios";
import { FaFileAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Profile = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const userToken = useTokenStored((state) => state.tokenBlogAy); // isinya string : eyJhbGciOiJIUzI1NiIsInR
  const setToken = useTokenStored((state) => state.setToken); 
  const [userData, setUserData] = useState<userProps>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken || userToken === "") navigate("/log-in");
    try {
      // buat request ke backend untuk ambil data user yang punya token yang sesuai dengan userToken dan set ke state userData
      // const response = axios.get(
      //   "http://localhost:8000/api/",
      //   userToken
      // );
    } catch (error) {
      console.error(error);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    if (
      location.pathname === "/profile" ||
      location.pathname === "/new-post" ||
      location.pathname === "/my-posts"
    )
      navigate("/");
  };
  return (
    <main
      className={`flex flex-col bg-style relative ${isDarkMode ? "dark" : ""} `}
    >
      <TopNavbar />
      <div className="w-full flex flex-row">
        <LeftSideNavbar />
        {/* Buat tampilan jiga dina github profile page, tambahken My post button */}
        <section className="w-full h-full min-h-96 p-5 md:p-10 ">
          <div
            id="profile-tab-wrapper"
            className="flex flex-col gap-4 dark:bg-[#22272E] bg-slate-200 border border-gray-500 rounded-xl w-full md:w-11/12 p-2 text-black dark:text-white font-roboto "
          >
            <div
              id="profile-tab"
              className="flex flex-col md:flex-row items-center gap-2 font-roboto font-semibold border-b border-gray-500 px-4 py-4"
            >
              <span className="text-5xl p-4">
                <FaUser />
              </span>
              <div className="max-md:flex flex-col justify-center items-center w-full md:ml-4">
                <h1 className="text-2xl mt-4">Yoga Pangestu</h1>
                <hr className="my-2 md:block hidden dark:border-slate-400 border-black" />
                <h2 className="text-base text-gray-400 ">email</h2>
              </div>
            </div>
            <ul
              id="profile-menus"
              className="w-full font-lato text-lg space-y-2"
            >
              <li
                onClick={() => navigate("/my-posts")}
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <FaFileAlt />
                My posts
              </li>
              <li
                onClick={() => toggleDarkMode()}
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <BsFillMoonStarsFill />
                Dark Mode
                <div></div>
              </li>
              <li
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <IoMdSettings />
                Settings
              </li>
              <li
                onClick={handleLogout}
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <FaSignOutAlt /> Logout
              </li>
            </ul>
          </div>
        </section>
      </div>
      <BottomNavbar />
    </main>
  );
};

export default Profile;
