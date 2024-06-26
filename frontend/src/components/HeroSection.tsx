import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HeroSection = ({ imagesForHero, usedIn }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgToUse, setImgToUse] = useState("" || []);
  const [executeAnimate, setExecuteAnimate] = useState(false);

  useEffect(() => {
    switch (usedIn) {
      case "post": {
        setImgToUse(imagesForHero);
        break;
      }
      case "home": {
        setImgToUse(imagesForHero[currentIndex]);
        break;
      }
    }
  }, [imgToUse, currentIndex]);
  //

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? imagesForHero.length - 1 : currentIndex - 1; // If first slide, go to last slide
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === imagesForHero.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1; // If first slide, go to last slide
    setCurrentIndex(newIndex);
  };
  return (
    <section
      id="HeroSection"
      className="w-full"
      data-carousel="static"
    >
      <div className="flex relative w-full h-[30.50rem] z-0 overflow-hidden items-center justify-between p-10 group">
        {imgToUse && (
          <div className="duration-700 ease-in-out">
            <img
              src={imgToUse[0]}
              alt="images"
              className={`absolute -z-10 inset-0 w-full h-[30.50rem] object-cover md:object-cover`}
            />
          </div>
        )}
        {usedIn === "home" && (
          <div className="w-full">
            <BsChevronCompactLeft
              onClick={prevSlide}
              className="hero-button left-10"
            />
            <BsChevronCompactRight
              onClick={nextSlide}
              className="hero-button right-10"
            />
          </div>
        )}
      </div>
      {usedIn === "home" && (
        <div className="flex items-center justify-center gap-3 w-full h-fit mt-4 ">
          {imagesForHero.slice(0, 5).map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full hover:cursor-pointer ${
                index === currentIndex ? "bg-[#D6D6D6]" : "bg-[#44444C]"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
