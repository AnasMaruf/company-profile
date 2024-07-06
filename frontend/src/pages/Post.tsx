import React, { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import TopNavbar from "../components/ui/TopNavbar";
import HeroSection from "../components/sections/HeroSection";
import Footer from "../components/sections/Footer";
import { contentProps } from "../../types";
import { useParams } from "react-router-dom";
import { storedContentArray } from "../zustand/store";

const Post = () => {
  const { postId } = useParams();
  const { isDarkMode } = useTheme();
  const contentArray = storedContentArray((state) => state.contentsArray);
  const [content, setContent] = useState<contentProps>({
    id: 0,
    title: "",
    body: "",
    tags: [],
    images: [],
    date: "",
  });
  const [imagesForHero, setImagesForHero] = useState<string[]>([]);

  useEffect(() => {
    contentArray.find((content) => {
      if (content.id.toString() != postId) return false;
      setContent(content);
      if (content.images) setImagesForHero(content.images);
    });
  }, [postId]);
  return (
    <main className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar />
      {content ? (
        <HeroSection
          contentForHero={imagesForHero}
          usedIn={"post"}
        />
      ) : (
        ""
      )}
      <article
        className={`w-full min-h-[45vh] px-10 font-roboto my-16 `}
      >
        <h1
          className={`text-4xl dark:text-gray-300 text-black font-lato font-bold tracking-wider`}
        >
          {content.title}
        </h1>
        <p className={`w-full my-8 text-xl dark:text-gray-300 text-black leading-relaxed`}>
          {content.body}
        </p>
        <div className={`flex gap-3 text-base dark:text-purple-400 text-orange-500`}>
          {content.tags && content.tags.map((tag) => <p>{tag}</p>)}
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default Post;
