import React from "react";
import { useTranslation } from "next-i18next";

const lang = [
  "HTML",
  "CSS",
  "JS",
  "Responsive Design",
  "React",
  "TailwindCSS",
  "NextJS",
  "Git",
  "Github",
  "Redux",
  "RedwoodJs",
];

const Info = ({ id }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        id={id}
        className="bg-gradient-to-tl from-rose-100 to-teal-100 h-auto flex flex-col dark:bg-info1"
      >
        <h1
          id="about_heading"
          className="mt-2 font-bold text-[40px] border-b-4 border-amber-400 mx-auto"
        >
          {t("about_me")}
        </h1>
        <h1 className="w-11/12 mt-6 md:w-3/5 mx-auto text-center text-[20px]">
          {t("description")}
        </h1>
        <div className="flex-col flex md:flex-row justify-evenly mt-6">
          <div className="w-11/12 mx-auto md:w-2/5 md:mb-7 mt-16 space-y-4 font-md md:mx-16">
            <h1 className="font-bold mx-auto text-[30px]">
              {t("about_heading")}
            </h1>
            <h1>{t("about_text1")}</h1>

            <h1>{t("about_text2")}</h1>
            <h1>{t("about_text3")}</h1>
          </div>
          <div className="w-11/12 mx-auto md:w-2/5">
            <h1 className="font-bold text-[30px] mt-16 ml-6">{t("Skills")}</h1>
            <div className="mb-6 flex flex-wrap mt-3">
              {lang.map((language) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="relative group hover:translate-y-1 m-3">
                    <div className="absolute -inset-0.5 dark:bg-gradient-to-r from-pink-600 to-purple-600 blur-sm animate-tilt"></div>
                    <h1 className="relative p-2 font-bold text-gray-600 dark:group-hover:text-gray-100 transition duration-1000 group-hover:duration-200 rounded-md text-gray-600 dark:text-gray-400 md:p-3 bg-white dark:bg-black">
                      {language}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
