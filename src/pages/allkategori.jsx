import React from "react";
import Kateg from "../components/card/kategori";
import Image1 from "/assets/hacker.jpg";
import Image2 from "/assets/fotopemandangan.jpg";
import Navbarguest from "../components/layout/navbar/navbarguest";
const Allkategori = () => {
  // const cards = [
  //   {
  //     image: Image1,
  //     title: "Kategori A",
  //     description: "Deskripsi Kategori",
  //   },
  // ];

  return (
    <>
      <div className="bg-gray-100">
        <Navbarguest />
        <div className="mt-10 ml-10">
          <h2 className="font-bold text-3xl">Kategori Pelatihan</h2>
          <p className="text-sm text-gray-600 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum
            enim quis ligula laoreet convallis.
          </p>
          <div className="flex  justify-start mt-10">
            <div className="flex flex-wrap">
              <Kateg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allkategori;
