import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import { useTheme } from "../components/ThemeContext";
import BottomNavbar from "../components/ui/BottomNavbar";
import { contentProps, userProps } from "../../types";
import { dummyContentData } from "../../dummyData";
import HeroSection from "../components/HeroSection";
import NavigateButton from "../components/ui/NavigateButton";
import BodyContentList from "../components/BodyContentList";

const Home = ({ isLoggedIn }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [contentsArray, setContent] = useState<contentProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState<userProps>({
    id: "",
    username: "",
    email: "",
    password: "",
    user_role: "",
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postPerPage = 9;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage; // page 1 = 0, page 2 = 9, page 3 = 18
  const currentContents = contentsArray.slice(firstPostIndex, lastPostIndex);
  let imagesForHero = currentContents
    .slice(0, 5)
    .map((content) => content.images);

  // Fetch API
  useEffect(() => {
    //  Ke ganti jadi get data api
    setContent(dummyContentData);
    console.log(isLoggedIn);
  }, [contentsArray]);

  // Get curent page number
  useEffect(() => {
    const page = searchParams.get("page");

    if (page) setCurrentPage(parseInt(page));
  }, [searchParams]);

  return (
    <>
      {/* Alternate color bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#D6D6D6] via-[#8C8C8C] to-[#0B0909] */}
      <main className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
        <TopNavbar isLoggedIn={isLoggedIn} />
        <HeroSection
          imagesForHero={imagesForHero}
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
            currentPage={currentPage}
            totalPost={contentsArray.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Footer />
        <BottomNavbar isLoggedIn={isLoggedIn} />
      </main>
    </>
  );
};

export default Home;
