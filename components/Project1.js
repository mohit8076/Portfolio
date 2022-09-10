import React from "react";
import { useTranslation } from "next-i18next";

const featuredImages = ["html.png", "css.png", "js.png"];

const Project1 = ({id}) => {
const { t } = useTranslation();

    
  return (
    <>
      <div className=" h-auto bg-gradient-to-bl from-rose-100 to-teal-100 flex flex-col dark:bg-info" id={id}>
        <h1 className="mt-15 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          {t("Projects")}
        </h1>
        
        <div className="flex-col flex md:flex-row justify-evenly items-center">
          <div className="w-11/12 text-center mx-auto mt-8 md:w-2/5 md:mt-2 space-y-4 font-md md:mx-16  ">
          <h1 className="font-bold text-[20px]">{t("about_heading")}</h1>
            <h1>
            {t("about_text1")}
            </h1>
          </div>
          <div className="flex justify-center md:w-2/5 mt-10 ">
            <img  src={featuredImages[0]} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 flex flex-col"> */}
        <div className="pb-12 flex-col-reverse bg-gradient-to-tl from-rose-100 to-teal-100 flex md:flex-row justify-evenly items-center dark:bg-info1">
          <div className="flex justify-center w-2/5 mt-10">
            <img  src={featuredImages[1]} alt="" />
          </div>
          <div className="w-11/12 text-center md:w-2/5 mt-16 space-y-4 font-md mx-16">
            <h1 className="font-bold text-[20px]">{t("about_heading")}</h1>
            <h1 >
            {t("about_text1")}
            </h1>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Project1;
