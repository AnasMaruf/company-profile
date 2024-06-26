import React from "react";
import ContentCard from "./ui/ContentCard";

const BodyContentList = ({currentContents}) => {
  return (
    <div className="w-full">
      <h1 className="font-roboto font-bold text-3xl w-full px-4">
        Discover what's new
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full h-fit px-4 lg:px-20 my-4">
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
