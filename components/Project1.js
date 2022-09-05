import React from "react";
const featuredImages = ["html.png", "css.png", "js.png"];


const Project1 = ({id}) => {
    
  return (
    <>
      <div className=" h-auto  bg-gradient-to-bl from-rose-100 to-teal-100 flex flex-col dark:bg-info" id={id}>
        <h1 className="mt-15 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          Projects
        </h1>
        
        <div className="flex-col flex md:flex-row justify-evenly items-center">
          <div className="w-11/12 text-center mx-auto mt-8 md:w-2/5 md:mt-2 space-y-4 font-md md:mx-16  ">
          <h1 className="font-bold text-[20px]">Get To Know Me !</h1>
            <h1>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </h1>
          </div>
          <div className="flex justify-center md:w-2/5 mt-10 ">
            <img  src={featuredImages[0]} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 flex flex-col"> */}
        <div className="flex-col-reverse bg-gradient-to-tl from-rose-100 to-teal-100 flex md:flex-row justify-evenly items-center dark:bg-info1">
          <div className="flex justify-center w-2/5 mt-10">
            <img  src={featuredImages[1]} alt="" />
          </div>
          <div className="w-11/12 text-center md:w-2/5 mt-16 space-y-4 font-md mx-16">
            <h1 className="font-bold text-[20px]">Get To Know Me !</h1>
            <h1 >
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </h1>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Project1;
