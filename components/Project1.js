import React from "react";
const featuredImages = ["html.png", "css.png", "js.png"];


const Project1 = ({id}) => {
    
  return (
    <>
      <div className=" h-full h-screen flex flex-col features-order" id={id}>
        <h1 className="mt-15 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          Projects
        </h1>
        
        <div className="flex justify-evenly feature-order-change feature-text-scroll">
          <div className="w-2/5 mt-20 space-y-4 font-md mx-16 moveInRight">
            <h1>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </h1>

            <h1>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </h1>
            <h1>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </h1>
          </div>
          <div className="w-2/5 mt-10 moveInLeft">
            <img className="w-4/5" src={featuredImages[0]} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col">
        <div className="flex justify-evenly">
          <div className="w-2/5 mt-10">
            <img className="w-4/5" src={featuredImages[0]} alt="" />
          </div>
          <div className="w-2/5 mt-16 space-y-4 font-md mx-16">
            <h1 className="font-bold text-[20px]">Get To Know Me !</h1>
            <h1 >
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </h1>

            <h1>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </h1>
            <h1>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
