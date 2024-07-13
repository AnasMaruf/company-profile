import React from "react";
import { useNavigate } from "react-router-dom";

const ContentCard = ({ content }) => {
  const navigate = useNavigate();
  const { id, images, title, date } = content;
  return (
    <button
      onClick={() => navigate(`/post/${id}`)}
      className="flex flex-col items-start font-lato border-2 w-[21.5rem] md:w-[22rem] lg:w-[26rem] h-fit overflow-hidden rounded-lg shadow-lg hover:scale-105 duration-300 dark:bg-[#111111]"
    >
      <img
        src={images[0]}
        alt="content"
        className="rounded-t-lg  w-full h-[16.63rem] object-fill "
      />
      <h2 className="font-bold text-xl px-5 my-5 h-14 overflow-hidden text-ellipsis hover:cursor-pointer">
        {title}
      </h2>

      <div className="flex items-center justify-between w-full gap-4 font-semibold text-[#8C8C8C] p-4">
        <p>{date}</p>
        {/* <div className="flex justify-end gap-3 w-full overflow-ellipsis">
          {content.tags &&
            content.tags.map((tag,index) => (
              <p className="items-center justify-start flex h-8 w-fit  rounded-full px-3 font-normal tracking-wider truncate hover:cursor-pointer" key={index}>
                {tag}
              </p>
            ))}
        </div> */}
      </div>
    </button>
  );
};

export default ContentCard;
