import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const title = searchParams.get("title");
    if (!title) return;
    setTitle(title);
  }, []);

  useEffect(() => {
    console.log(title);
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.get("page")) searchParams.delete("page"); // Remove page param if it exists
    searchParams.set("title", title);
    const newPath = `/search?${searchParams.toString()}`;
    navigate(newPath);
  };
  return (
    <>
      <form
        className="flex-1 flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="relative flex gap-3 text-left md:w-[80%] lg:w-[60%] hover:cursor-text rounded-xl ">
          <FaSearch className="absolute top-3 left-2 text-xl dark:text-[#D6D6D6]" />
          <input
            type="text"
            placeholder="Search for title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="flex gap-3 border-2 text-left py-2 px-9 tracking-wide  dark:bg-[#1C1F26] hover:cursor-text rounded-xl w-full h-11"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
