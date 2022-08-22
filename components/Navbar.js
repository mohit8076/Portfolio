/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <motion.div variants={fadeIn("down")} initial="initial" animate="animate">
        <Disclosure as="nav" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-20">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="hidden lg:block h-12 w-auto rounded-3xl bg-amber-400"
                        src="man.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:ml-4 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <a
                        href="#"
                        className="text-gray-900 inline-flex items-center pt-1 text-md font-bold hover:text-amber-400"
                      >
                        MOHIT CHAUHAN
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto px-10 sm:pr-0">
                    <a
                      href="#"
                      className="text-gray-900 inline-flex items-center pt-1 px-8 text-md font-semibold hover:text-amber-400"
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
              </div>
            </>
          )}
        </Disclosure>
      </motion.div>
    </>
  );
}
