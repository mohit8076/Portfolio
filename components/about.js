import React from "react";
import { useTranslation } from "next-i18next";


const lang = ["HTML", "CSS", "JS"];

const About = ({id}) => {
  const { t } = useTranslation();

  return (
    <>
      <div id={id} className="bg-gradient-to-tl from-rose-100 to-teal-100 h-auto flex flex-col dark:bg-info1">
        <h1 className="mt-2 font-semibold text-[27px] border-b-4 border-amber-400 mx-auto">
          {t("about_me")}
        </h1>
        <h1 className="w-11/12 mt-6 md:w-3/5 mx-auto text-center text-[20px]">
          {t("description")}
        </h1>
        <div className="flex-col flex md:flex-row justify-evenly mt-6">
          <div className="w-11/12 mx-auto md:w-2/5 md:mb-7 mt-16 space-y-4 font-md md:mx-16">
            <h1 className="font-bold mx-auto text-[20px]">{t("about_heading")}</h1>
            <h1>
              {t("about_text1")}
            </h1>

            <h1>
              {t("about_text2")}
            </h1>
            <h1>
              {t("about_text3")}
            </h1>
          </div>
          <div className="w-11/12 mx-auto md:w-2/5">
            <h1 className="font-bold text-[20px] mt-16 ml-6">{t("Skills")}</h1>
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
