import React, { useEffect, useRef, useState } from "react";

const CategoryInput = ({ data, setData }) => {
  const suggestionsCategoryData = [
    "Teknologi",
    "Artificial Intelligence",
    "Data Science",
    "Internet of Things",
    "Digital marketing",
    "Cloud computing",
    "Web development",
    "Web design",
    "Mobile Development",
  ];
  const [categorySuggested, setCategorySuggested] = useState<string[]>([]);
  const [categoryValue, setCategoryValue] = useState("");
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const handleChangeInput = (e) => {
    if (e.target.name === "category") {
      const value = e.target.value;
      const filteredSuggestions = suggestionsCategoryData.filter(
        (suggestion) => {
          return suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }
      );
      setCategorySuggested(filteredSuggestions);
      setCategoryValue(e.target.value);
    }
  };

  const handleSuggestionClick = (event, suggestion) => {
    event.preventDefault();
    // Masih gagal, saat suggestion di click text yang diinput user  seperti ar terbawa masuk ke array jadi [a,r, artificial intelligence]
    if (event.key === "Enter") {
      data.category.push(categoryValue);
    }
    setCategorySuggested([]);
  };

  const handleClickOutside = (event) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target)
    ) {
      setCategorySuggested([]);
    }
  };
  const handleEscapeKeyDown = (event) => {
    if (event.key === "Escape") {
      setCategorySuggested([]);
    }
  };
  const handleEnterKeyDown = (event) => {
    console.log(data.category);
    if (event.key === "Enter") {
    }
  };

  useEffect(() => {
    console.log(categoryValue);
  }, [categoryValue]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKeyDown);
    document.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKeyDown);
      document.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <input
        type="text"
        id="category"
        name="category"
        autoComplete="off"
        value={categoryValue}
        onChange={(event) => handleChangeInput(event)}
        placeholder="Insert your category here"
        className={"w-full p-2 border-2 rounded-lg text-black"}
      />
      {categorySuggested.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute  top-20 z-10 bg-white text-black border-2 w-full max-h-40 overflow-y-auto"
        >
          {categorySuggested.map((category, index) => (
            <li
              key={category}
              onClick={(event) => handleSuggestionClick(event, category)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryInput;
