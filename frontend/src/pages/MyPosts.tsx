import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { useTokenStored } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import LeftSideNavbar from "../components/ui/LeftSideNavbar";
import { FaFileAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import BottomNavbar from "../components/ui/BottomNavbar";
import { userProps } from "../../types";

const MyPosts = () => {
  const { isDarkMode } = useTheme();
  const userToken = useTokenStored((state) => state.tokenBlogAy); // isinya string : eyJhbGciOiJIUzI1NiIsInR
  const [userData, setUserData] = useState<userProps>();
  const [postsList, setPostsList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    try {
    } catch (error) {
      console.error(error);
    }
  }, []);
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
              className="flex items-center gap-4 font-roboto text-2xl font-semibold  px-4 py-2"
            >
              <FaFileAlt />
              <h1>My Posts</h1>
            </div>

            <table className="w-full table-auto ">
              <thead className="border-b-2 border-gray-500">
                <tr className=" font-lato font-semibold text-lg">
                  <th className="text-start">No</th>
                  <th className="text-start">Title</th>
                  <th className="text-start">Category</th>
                  <th className="text-start">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Ke ganti jadi map array posts */}
                <tr>
                  <td className="my-posts-td-style">1</td>
                  <td className="my-posts-td-style text-wrap">Hello World nama saya yoga pangestu</td>
                  <td className="my-posts-td-style">Teknologi</td>
                  <td className="my-posts-td-style">Placeholder</td>
                </tr>
                <tr>
                  <td className="my-posts-td-style">2</td>
                  <td className="my-posts-td-style">Hello Garut</td>
                  <td className="my-posts-td-style">Teknologi</td>
                  <td className="my-posts-td-style">Placeholder</td>
                </tr>
                <tr>
                  <td className="my-posts-td-style">3</td>
                  <td className="my-posts-td-style">Hello Ceng</td>
                  <td className="my-posts-td-style">Teknologi</td>
                  <td className="my-posts-td-style">Placeholder</td>
                </tr>
              </tbody>
            </table>

            {/* <ul
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
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <IoMdSettings />
                Settings
              </li>
              <li
                className={`flex items-center gap-4 hover:bg-slate-400 cursor-pointer p-3 rounded-xl`}
              >
                <FaSignOutAlt /> Logout
              </li>
            </ul> */}
          </div>
        </section>
      </div>
      <BottomNavbar />
    </main>
  );
};

export default MyPosts;
