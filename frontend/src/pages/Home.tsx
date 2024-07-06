import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/sections/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import { useTheme } from "../components/ThemeContext";
import BottomNavbar from "../components/ui/BottomNavbar";
import { contentProps, userProps } from "../../types";
import { dummyContentData } from "../../dummyData";
import HeroSection from "../components/sections/HeroSection";
import NavigateButton from "../components/ui/NavigateButton";
import BodyContentList from "../components/sections/BodyContentList";
import { storedContentArray } from "../zustand/store";

const Home = () => {
  const { isDarkMode } = useTheme();
  const contentArray = storedContentArray((state) => state.contentsArray);
  const setContentsArray = storedContentArray(
    (state) => state.setContentsArray
  );
  const navigate = useNavigate();

  // Fetch API
  useEffect(() => {
    //  Ke ganti jadi get data api
    setContentsArray(dummyContentData);
    console.log(1)
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage; // page 1 = 0, page 2 = 9, page 3 = 18
  const currentContents = contentArray.slice(firstPostIndex, lastPostIndex);
  let contentForHero = currentContents.slice(0, 5).map((content) => content); // Get images for hero

  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <main className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
        <TopNavbar />
        <HeroSection
          contentForHero={contentForHero}
          usedIn={"home"}
        />
        <div className="mt-10">
          <button
            className="border-2 p-3 border-white rounded-full"
            onClick={() => navigate("/log-in")}
          >
            To Login
          </button>
          <button
            className="border-2 p-3 border-white rounded-full"
            onClick={() => navigate("/sign-up")}
          >
            To Sign Up
          </button>
        </div>
        <div className=" h-fit my-20">
          <BodyContentList currentContents={currentContents} />
          <NavigateButton
            totalPost={contentArray.length}
            currentPage={currentPage}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Footer />
        <BottomNavbar />
      </main>
    </>
  );
};

export default Home;
