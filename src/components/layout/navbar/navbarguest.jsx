import React, { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import LanguageDropdown from "./languageDropdown";
import Toogle_notif from "../../notification/toogle_notif";
// import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const Navbarguest = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`bg-[#053B50] px-7 border-gray-200 dark:bg-gray-900 ${
          isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        <div className="w-full flex flex-row items-center justify-between p-2">
          <a href="/" className="flex items-center mr-auto">
            <img
              src="/logoTab1.png"
              width="45"
              className="mr-1"
              alt="Artikelite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Codingity
            </span>
          </a>

        <ul className="flex flex-row font-medium rounded-lg ml-auto dark:bg-gray-900">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-700 md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-700 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
            >
              Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-700 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-700 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-700 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
            >
              About
            </a>
          </li>
          <li>
          <Button className="ml-5" color="blue">LOGIN</Button>
          </li>
          <li>
          <Button className="ml-3 mr-0" color="blue">REGISTER</Button>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbarguest;
