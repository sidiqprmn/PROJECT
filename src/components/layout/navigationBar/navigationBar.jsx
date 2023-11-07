import React, { useEffect, useState } from "react";
import Dropdown from "../navbar/dropdown";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import LanguageDropdown from "../navbar/languageDropdown";
import Toogle_notif from "../../notification/toogle_notif";
import ProfileMenu from "./profileMenu";
// import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const NavigationBar = () => {
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
        className={`bg-white px-7 border-gray-200 dark:bg-gray-900 ${
          isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        <div className="w-full flex flex-row items-center justify-between p-2">
          <a href="/" className="flex items-center mr-auto">
            <img
              src="/logoTab.png"
              width="45"
              className="mr-1"
              alt="Artikelite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NusaLearning
            </span>
          </a>

          <div
            className="flex flex-row items-center mx-auto justify-between "
            id="navbar-search"
          >
            <form>
              <div className="flex w-[500px]">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Cari Pelatihan... "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className="flex flex-row font-medium rounded-lg ml-auto bg-white dark:bg-gray-900">
            <li>
              <a
                href="/home"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/pelatihan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
              >
                Pelatihan
              </a>
            </li>
            <li>
              <LanguageDropdown />
            </li>
            <li>
              <Toogle_notif />
            </li>
            <li className="block pl-5">
              <ProfileMenu />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
