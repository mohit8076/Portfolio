import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const featuredImages = ["/first.jpg", "/second.jpg", "/js.png"];

const Project1 = ({ id }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className=" h-auto bg-gradient-to-bl from-rose-100 to-teal-100 flex flex-col dark:bg-info"
        id={id}
      >
        <h1 className="mt-16 font-bold text-[40px] border-b-4 border-amber-400 mx-auto">
          {t("Projects")}
        </h1>

        <div className="flex-col mt-12 flex md:flex-row justify-between">
          <div className="w-11/12 mx-auto mt-16 md:w-2/5 space-y-4">
            <h1 className="font-bold text-[40px]">{t("about_heading")}</h1>
            <h1 className="font-normal text-gray-700 dark:text-white text-[20px]">
              {t("about_text1")}
            </h1>
            <div className="mt-6 mx-auto">
              <a
                target="_blank"
                className="inline-flex mt-3 px-4 py-2 border border-transparent text-base font-medium rounded-md bg-amber-400 hover:animate-bounce"
                rel="noreferrer"
              >
                {t("Case Study")}
              </a>
            </div>
          </div>
          <div className="flex justify-end mt-10 rounded-l-xl shadow-xl shadow-slate-500">
            <Image
              className="rounded-l-xl"
              height="340px"
              width="550px"
              src={featuredImages[0]}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 flex flex-col"> */}
      <div className="py-28 flex-col-reverse bg-gradient-to-tl from-rose-100 to-teal-100 flex md:flex-row justify-between dark:bg-info1">
        <div className="flex justify-start rounded-r-xl shadow-xl shadow-slate-500">
          <Image
            className="rounded-r-xl"
            height="340px"
            width="550px"
            src={featuredImages[1]}
            alt=""
          />
        </div>
        <div className="w-11/12 md:w-2/5 mt-4 space-y-4 font-md mx-4 md:mx-16">
          <h1 className="font-bold text-[40px]">{t("about_heading")}</h1>
          <h1 className="font-normal text-gray-700 dark:text-white text-[20px]">
            {t("about_text1")}
          </h1>
          <div className="mt-6 mx-auto">
            <a
              target="_blank"
              className="inline-flex mx-auto mt-3 mb-6 px-4 py-2 border border-transparent text-base font-medium rounded-md bg-amber-400 hover:animate-bounce"
              rel="noreferrer"
            >
              {t("Case Study")}
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Project1;
