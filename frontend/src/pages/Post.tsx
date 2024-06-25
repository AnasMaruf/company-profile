import React, { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import TopNavbar from "../components/ui/TopNavbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { contentProps } from "../../types";
import { useParams } from "react-router-dom";
import { dummyContentData } from "../../dummyData";

const Post = () => {
  const { postId } = useParams();
  const { isDarkMode, toggleDarkMode } = useTheme();
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
    dummyContentData.find((content) => {
      if (content.id.toString() == postId) {
        setContent(content);
        if (content.images) setImagesForHero(content.images);
      }
    });
    console.log(imagesForHero);
  }, [postId]);
  return (
    <main className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar isLoggedIn={true} />
      {content ? (
        <HeroSection
          imagesForHero={imagesForHero}
          usedIn={"post"}
        />
      ) : (
        ""
      )}
      <article className={`w-full min-h-[37vh] px-5 my-16`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nam
        earum, saepe a quae sunt assumenda dolorem, nisi in obcaecati ducimus
        perspiciatis itaque quis sequi dolore ad quas omnis exercitationem!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
        tenetur commodi. Magnam eligendi qui distinctio placeat veritatis
        possimus, at molestiae optio esse laborum perferendis quaerat maiores id
        tenetur, ex dolorem!
        <p>{content.tags}</p>
      </article>
      <Footer />
    </main>
  );
};

export default Post;
