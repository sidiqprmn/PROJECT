import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import ProductCard from "../components/card/pelatihan";
import { Checkbox, Select } from "antd";

const Pelatihan = () => {
  const [kategori, setKategori] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchKategori();
  }, []);

  const fetchKategori = async () => {
    try {
      const response = await fetch("http://localhost:3100/kategori/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setKategori(data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <NavigationBar />

      <div className="flex">
        <div
          className="w-1/4 bg-gray-300 text-black p-4 h-screen"
          style={{ height: "145vh" }}
        >
          <h3 className="text-xl font-semibold mb-4">Filter</h3>
          <div className="space-y-2">
            <button
              className="w-full py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
              onClick={toggleDropdown}
            >
              Kategori
              <svg
                className={`-mr-1 ml-2 h-5 w-5 inline-block transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="mt-2 space-y-1">
                {kategori.map((item) => (
                  <div key={item.id} className="mt-2 space-y-1">
                    <Checkbox>{item.name}</Checkbox>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="justify-start">
          <div className="flex flex-wrap">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pelatihan;
