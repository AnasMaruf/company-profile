import React from "react";
import ContentCard from "../ui/ContentCard";

const BodyContentList = ({ currentContents, usedIn }) => {
  return (
    <div className="w-full mt-10 ">
      <h1 className="font-roboto font-bold text-3xl w-full px-4 max-md:flex flex-col items-center justify-center">
        {usedIn === "home"
          ? "Discover what's new"
          : usedIn === "search"
          ? "Search Result"
          : ""}
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 w-full min-h-[45rem] px-4 lg:px-20 my-4">
        {currentContents.map((content) => (
          <ContentCard
            key={content.id}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyContentList;
