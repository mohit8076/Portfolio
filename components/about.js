import React from "react";

const lang = ["HTML", "CSS", "JS"];

const About = ({id}) => {
  return (
    <>
      <div id={id} className="bg-gray-50 h-full h-screen flex flex-col">
        <h1 className="mt-10 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          About Me
        </h1>
        <h1 className="mt-6 w-3/5 mx-auto text-center text-[20px]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h1>
        <div className="flex justify-evenly">
          <div className="w-2/5 mt-16 space-y-4 font-md mx-16">
            <h1 className="font-bold text-[20px]">Get To Know Me !</h1>
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
          <div className="w-2/5">
            <h1 className="font-bold text-[20px] mt-16 ml-6">My Skills.</h1>
            <div className="flex flex-wrap mt-3">
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                HTML
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                CSS
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                JavaScript
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                Responsive Design
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                React
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                TailwindCSS
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                NextJS
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                GIT
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                Redux
              </h1>
              <h1 className="border rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white p-3 m-3 bg-gray-200">
                Github
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
