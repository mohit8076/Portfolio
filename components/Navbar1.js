import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div>
      <motion.div variants={fadeIn("down")} initial="initial" animate="animate">
        <nav className="bg-white dark:bg-gray-700">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-20 ">
              {/* <div className="flex items-center"> */}
              <div className="flex flex-row items-center">
                <img
                  className="h-12 w-12 rounded-3xl bg-amber-400"
                  src="man.png"
                  alt="Workflow"
                />
                <h1 className="ml-3 text-md uppercase font-bold hover:text-amber-400">
                  {t("Mohit Chauhan")}
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center ">
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                    >
                      {t("Home")}
                    </a>

                    <Link
                      className="inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      // offset={50}
                      duration={500}
                    >
                      {t("About")}
                    </Link>

                    <Link
                      className="inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                      activeClass="active"
                      to="project"
                      spy={true}
                      smooth={true}
                      // offset={50}
                      duration={500}
                    >
                      {t("Project")}
                    </Link>

                    <Link
                      className="inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      // offset={50}
                      duration={500}
                    >
                      {t("Contact")}
                    </Link>
                  </div>
                  <div>{renderThemeChanger()}</div>
                  <select className="ml-3 p-2 bg-zinc-100 dark:bg-gray-500 rounded-lg" onChange={handleLocaleChange} value={router.locale}>
                  <option value="en">English<span class="fi fi-gb"></span></option>
                  <option value="fr">French<span class="fi fi-gr"></span></option>
                  <option value="hi">Hindi<span class="fi fi-gr"></span></option>
                  </select>
                </div>
              </div>
              {/* </div> */}
              <div className="-mr-2 flex md:hidden">
                <div className="mr-3 flex items-center">
                  {renderThemeChanger()}
                </div>
                <select className="mr-3" onChange={handleLocaleChange} value={router.locale}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="hi">Hindi</option>
                  </select>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden " id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-info"
                >
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                  >
                    {t("Home")}
                  </a>

                  <Link
                    className="text-gray-900 dark:text-white block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    {t("About")}
                  </Link>

                  <Link
                    className="text-gray-900 dark:text-white block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded -md cursor-pointer"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    {t("Project")}
                  </Link>

                  <Link
                    className="text-gray-900 dark:text-white block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    {t("Contact")}
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </motion.div>
    </div>
  );
}

export default Navbar;
