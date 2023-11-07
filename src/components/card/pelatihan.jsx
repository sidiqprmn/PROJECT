import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [pelatihan, setPelatihan] = useState([]);

  useEffect(() => {
    fetchPelatihan();
  }, []);

  const fetchPelatihan = async () => {
    try {
      const response = await fetch("http://localhost:3100/pelatihan/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPelatihan(data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  return (
    <>
      {pelatihan.map((item) => (
        <div key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <div className="max-w-[300px] mr-10 ml-10 mt-10 mx-auto bg-white rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-32 object-cover"
                src={`http://localhost:3100/images/pelatihan/${item.image}`}
                alt={item.name}
              />
              <div className="p-2 text-left">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="px-3 py-2 flex flex-col items-start">
                <div className="text-sm font-semibold text-gray-800">
                  Dibuat oleh:
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  Untuk:{" "}
                </div>
              </div>
              <div className="px-6 py-2 flex justify-between items-center">
                <div className="flex space-x-1">
                  <svg
                    className="h-6 w-6 inline-block text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 10c0 1.93 2.685 3.5 6 3.5s6-1.57 6-3.5-2.685-3.5-6-3.5-6 1.57-6 3.5zm6 1.167a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334zm0 1.167a2.334 2.334 0 1 1 0-4.667 2.334 2.334 0 0 1 0 4.667z"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">{item.views}</span>
                  <div className="ml-4">
                    <img
                      className="h-4 w-4 inline-block text-gray-500"
                      src="http://cdn.onlinewebfonts.com/svg/img_287671.png"
                      alt="Comment Icon"
                    />
                    <span className="text-gray-600 text-sm">
                      {item.comments}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <span className="font-bold text-lg">Rp. {item.price}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
