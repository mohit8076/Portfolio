import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div variants={fadeIn("down")} initial="initial" animate="animate">
        <nav className="bg-white">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-20 ">
              {/* <div className="flex items-center"> */}
              <div className="flex flex-row items-center">
                <img
                  className="h-12 w-12 rounded-3xl bg-amber-400"
                  src="man.png"
                  alt="Workflow"
                />
                <h1 className="ml-3 text-md font-bold hover:text-amber-400">MOHIT CHAUHAN</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline ">
                  <a
                    href="#"
                    className="text-gray-900 inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                  >
                    Home
                  </a>

                  <Link
                    className="text-gray-900 inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    About
                  </Link>

                  <Link
                    className="text-gray-900 inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    Project
                  </Link>

                  <Link
                    className="text-gray-900 inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400 cursor-pointer"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              {/* </div> */}
              <div className="-mr-2 flex md:hidden">
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
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white"
                >
                  <a
                    href="#"
                    className="text-gray-900 block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                  >
                    Home
                  </a>

                  <Link
                    className="text-gray-900 block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    About
                  </Link>

                  <Link
                    className="text-gray-900 block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded -md cursor-pointer"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    Project
                  </Link>

                  <Link
                    className="text-gray-900 block p-2 text-md font-semibold hover:text-black hover:bg-amber-300 rounded-md cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                  >
                    Contact
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