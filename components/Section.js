import React from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTranslation } from "next-i18next";
import { Link } from "react-scroll";

const Section = () => {
  const words = ["Mohit Chauhan ", "Web developer"];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 140,
    deleteSpeed: 110,
  });
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={fadeIn()} initial="initial" animate="animate">
        <div className="flex flex-col h-full h-screen  bg-gradient-to-bl from-rose-100 to-teal-100 dark:bg-info">
          <div className="ah-headline">
            <h1 className="flex mt-32  text-[30px] md:text-[50px]  font-extrabold mx-auto uppercase justify-center">
              <span id="intro_text">{t("salutation")}</span>
              <span id="intro_para" className="text-amber-500 ml-3">
                {text}
              </span>
              <Cursor />
            </h1>
          </div>
          <h1 className="mt-6 w-11/12 md:w-3/5 mx-auto text-center text-[22px]">
            {t("description_text")}
          </h1>
          {/* <button className="w-4/5 py-3 md:w-auto mt-6 border rounded-md drop-shadow-lg text-lg border-amber-400 font-semibold mx-auto md:px-9 md:py-3 bg-amber-400 uppercase"> */}
          <Link
            id="project_button"
            className="w-4/5 py-3 hover:animate-bounce md:w-auto mt-6 border rounded-md drop-shadow-lg text-lg border-amber-400 font-semibold mx-auto md:px-9 md:py-3 bg-amber-400 uppercase"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("Projects")}
          </Link>

          {/* </button> */}
          <span
            id="project_icon"
            className="mt-24 animate-bounce rounded-full p-4 bg-gray-800 text-white text-sm w-auto mx-auto dark:bg-amber-400"
          >
            <svg
              className="w-6 h-6 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
