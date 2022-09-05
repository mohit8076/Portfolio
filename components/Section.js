import React from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Section = () => {
  const words = ["Mohit Chauhan ", "Web developer"];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed:140,
    deleteSpeed:110
  });
  return (
    <>
      <motion.div variants={fadeIn()} initial="initial" animate="animate">
        <div className="flex flex-col h-full h-screen  bg-gradient-to-bl from-rose-100 to-teal-100 dark:bg-info">
          <div className="ah-headline">
            <h1 className="flex mt-32  text-[30px] md:text-[50px]  font-extrabold mx-auto uppercase justify-center">
              <span>Hey, I am {" "}</span>
              <span className="text-amber-500 ml-3">{text}</span>
              <Cursor />
            </h1>
          </div>
          <h1 className="mt-6 w-11/12 md:w-3/5 mx-auto text-center text-[22px]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </h1>
          <button className="w-4/5 py-3 md:w-auto mt-6 border rounded-md drop-shadow-lg text-lg border-amber-400 font-semibold mx-auto md:px-9 md:py-3 bg-amber-400 uppercase">
            Projects
          </button>
          <span class="mt-24 animate-bounce rounded-full p-4 bg-gray-800 text-white text-sm w-auto mx-auto dark:bg-amber-400">
            <svg
              class="w-6 h-6 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Section;
