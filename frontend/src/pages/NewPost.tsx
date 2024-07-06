import React, { useEffect, useState } from "react";
import TopNavbar from "../components/ui/TopNavbar";
import BottomNavbar from "../components/ui/BottomNavbar";
import Footer from "../components/sections/Footer";
import { useTheme } from "../components/ThemeContext";
import InputForm from "../components/Elements/input";

const NewPost = () => {
  const { isDarkMode } = useTheme();
  const [data, setData] = useState({
    title: "",
    body: "",
    category: [],
  });
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main className={`bg-style relative ${isDarkMode ? "dark" : ""} `}>
      <TopNavbar />
      <form
        action="POST"
        className="flex flex-col gap-4 px-10 mt-6 w-full min-h-[43rem] font-roboto"
      >
        <InputForm
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={(e) => handleChangeInput(e)}
          placeholder="Insert your title here"
          label="Title"
          labelClassName="font-lato font-bold text-lg dark:text-white text-black"
          inputClassName="p-2 border-2 rounded-lg text-black"
        />
        {/* Image input here */}
        
        {/* Body input here */}
        <textarea
          name="body"
          id="body"
          value={data.body}
          placeholder="Write your post here"
          rows={15}
          onChange={(e) => handleChangeInput(e)}
          className="p-2 border-2 rounded-lg text-black"
        />
        {/* Category input here */}
        <button
          type="submit"
          className="bg-black dark:bg-white dark:text-black text-white text-lg font-lato font-semibold py-2 rounded-lg"
        >
          Post
        </button>
      </form>
      <Footer />
      <BottomNavbar />
    </main>
  );
};

export default NewPost;
