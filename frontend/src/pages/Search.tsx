import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import NavigateButton from "../components/ui/NavigateButton";
import Footer from "../components/sections/Footer";
import BodyContentList from "../components/sections/BodyContentList";
import { contentProps } from "../../types";
import { dummyContentData } from "../../dummyData";
import SearchBar from "../components/ui/SearchBar";
import BottomNavbar from "../components/ui/BottomNavbar";

const Search = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [contentsArray, setContentsArray] = useState<contentProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log(searchParams.get("title"));
    setContentsArray(dummyContentData);
  }, []);
  return (
    <section className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar />
      <div className="md:hidden w-full py-4 mb-4 border-b-2 ">
        <SearchBar />
      </div>
      <BodyContentList currentContents={contentsArray} />
      <NavigateButton
        totalPost={contentsArray.length}
        currentPage={currentPage}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
      <BottomNavbar />
    </section>
  );
};

export default Search;
