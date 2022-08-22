import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
const featuredImages = ["html.png", "css.png", "js.png"];

let count = 0;
let slideInterval;

const Project = () => {
  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  return (
    <div className="bg-gray-50 h-full h-screen flex flex-col">
      <h1 className="mt-10 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
        Projects
      </h1>
      <div className="w-full m-auto">
        <div ref={slideRef} className="w-full relative select-none">
          <div className="w-2/5 relative select-none">
            <div className="aspect-w-16 aspect-h-9">
              <img src={featuredImages[currentIndex]} alt="" />
            </div>
            <div className="flex flex-col">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <button
                className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                onClick={handleOnNextClick}
              >
                <AiOutlineVerticalRight size={35} />
              </button>
              
              <button
                className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                onClick={handleOnPrevClick}
              >
                <AiOutlineVerticalLeft size={35} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
