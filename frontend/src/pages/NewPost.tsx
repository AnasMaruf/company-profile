import React, { useEffect, useState } from "react";
import TopNavbar from "../components/ui/TopNavbar";
import BottomNavbar from "../components/ui/BottomNavbar";
import { useTheme } from "../components/ThemeContext";
import InputForm from "../components/Elements/input";
import ImageInput from "../components/Elements/postInput/imageInput";
import CategoryInput from "../components/Elements/postInput/categoryInput";
import { contentProps } from "../../types";

type InitialContentProps = Omit<contentProps, "id" | "date">;

const NewPost = () => {
  const { isDarkMode } = useTheme();
  const [imageData, setImageData] = useState<Blob[]>([]);
  const [data, setData] = useState<InitialContentProps>({
    title: "",
    body: "",
    category: [],
    images: [],
  });

  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("body", data.body);
      formData.append("category", JSON.stringify(data.category));

      if (imageData)
        imageData.forEach((image) => {
          formData.append("images", image);
        });
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };

  // Tambahkan guard dan error handler bila user tidak input data ke salah satu Input
  return (
    <main
      className={`flex flex-col bg-style relative  ${
        isDarkMode ? "dark" : ""
      } `}
    >
      <TopNavbar />
      <form
        action="POST"
        className="flex flex-col gap-4 px-4 md:px-48 lg:px-96 my-6 w-full md:min-h-[43rem] md:h-fit font-roboto"
      >
        {/* Title input here */}
        <InputForm
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={(e) => handleChangeInput(e)}
          placeholder="Insert your title here"
          label="Title"
          labelClassName="font-lato font-bold text-lg dark:text-white text-black"
          inputClassName="p-2 border-2 rounded-lg text-black "
        />
        {/* Image input here */}
        <div className="w-full flex flex-col gap-1 relative">
          <label
            htmlFor="image"
            className="font-lato font-bold text-lg dark:text-white text-black"
          >
            Image
          </label>

          <ImageInput setImageData={setImageData} />
        </div>

        {/* Body input here */}
        <div className="w-full flex flex-col gap-1 relative">
          <label
            htmlFor="body"
            className="font-lato font-bold text-lg dark:text-white text-black"
          >
            Content
          </label>
          <textarea
            name="body"
            id="body"
            value={data.body}
            placeholder="Write your post here"
            rows={12}
            onChange={(e) => handleChangeInput(e)}
            className="p-2 border-2 rounded-lg text-black"
          />
        </div>

        {/* Category input here */}
        <div className="w-full flex flex-col gap-1 relative">
          <label
            htmlFor="category"
            className="font-lato font-bold text-lg dark:text-white text-black"
          >
            category
          </label>
          <CategoryInput
            data={data}
            setData={setData}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black dark:bg-white dark:text-black text-white text-lg font-lato font-semibold py-2 mt-10 mb-10 rounded-lg"
        >
          Post
        </button>
      </form>
      <BottomNavbar />
    </main>
  );
};

export default NewPost;
