import React from "react";

const lang = ["HTML", "CSS", "JS"];

const About = ({id}) => {
  return (
    <>
      <div id={id} className="bg-gradient-to-tl from-rose-100 to-teal-100 h-auto flex flex-col dark:bg-info1">
        <h1 className="mt-2 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          About Me
        </h1>
        <h1 className="w-11/12 mt-6 md:w-3/5 mx-auto text-center text-[20px]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h1>
        <div className="flex-col flex md:flex-row justify-evenly">
          <div className="w-11/12 mx-auto md:w-2/5 md:mb-7 mt-16 space-y-4 font-md md:mx-16">
            <h1 className="font-bold mx-auto text-[20px]">Get To Know Me !</h1>
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
          <div className="w-11/12 mx-auto md:w-2/5">
            <h1 className="font-bold text-[20px] mt-16 ml-6">My Skills.</h1>
            <div className="mb-6 flex flex-wrap mt-3">
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                HTML
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                CSS
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                JavaScript
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                Responsive Design
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                React
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                TailwindCSS
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                NextJS
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                GIT
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
                Redux
              </h1>
              <h1 className="border p-2 font-bold text-gray-600 rounded-md hover:translate-y-1 hover:bg-amber-300 hover:text-white md:p-3 m-3 bg-white">
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
