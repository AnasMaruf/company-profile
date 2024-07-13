import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/ui/TopNavbar";
import Loader from "../components/ui/Loader";
import NavigateButton from "../components/ui/NavigateButton";
import Footer from "../components/sections/Footer";
import BodyContentList from "../components/sections/BodyContentList";
import { dummyContentData } from "../../dummyData";
import SearchBar from "../components/ui/SearchBar";
import BottomNavbar from "../components/ui/BottomNavbar";
import { storedContentArray } from "../zustand/store";

const Search = () => {
  const { isDarkMode } = useTheme();
  const contentsArray = storedContentArray((state) => state.contentsArray);
  const setContentsArray = storedContentArray(
    (state) => state.setContentsArray
  );
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const searchParams = new URLSearchParams(window.location.search);
  const searchTitle = searchParams.get("title");

  useEffect(() => {
    if (searchTitle === "") {
      setContentsArray(dummyContentData);
      return;
    }
    if (!searchTitle) return;
    try {
      setIsLoading(true);
      // const response = await axios.
      // Nanti ganti dengan req api search dengan data string title dari search parameter
      setContentsArray(
        dummyContentData.filter((content) =>
          content.title.toLowerCase().includes(searchTitle.toLowerCase())
        )
      );
      setIsLoading(false);
      setNotFound(false);
    } catch (error) {
      setNotFound(true);
      const errors = error.response.data.errors.split(".");
      if (error.response) {
        console.log(errors);
      }
    }
    // setContentsArray(dummyContentData);
  }, [searchTitle]);
  return (
    <section className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar />
      <div className="md:hidden w-full py-4 mb-4 border-b-2 ">
        <SearchBar />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-[26rem]">
          <Loader />
        </div>
      ) : (
        <BodyContentList
          currentContents={contentsArray}
          usedIn={"search"}
        />
      )}
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
