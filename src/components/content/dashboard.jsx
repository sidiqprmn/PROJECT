import React from "react";
import Tc from "./grafikAdmin";
import Dnt from "./grafikdonat";

const Dpi = () => {
  return (
    <>
      <div className="border border-black">
        <p className="ml-4 mt-1 font-bold">Pelatihan Saya</p>
        <div className="grid grid-cols-3 ">
          <div
            className="border border-black text-center text-2xl my-3 mx-7 flex flex-col justify-center items-center"
            style={{ height: "120px" }}
          >
            {" 9"}
            <div className="text-sm">Total Semua Pelatihan</div>{" "}
          </div>
          <div
            className="border border-black text-center text-2xl my-3 mx-7 flex flex-col justify-center items-center"
            style={{ height: "120px" }}
          >
            {"1 "}
            <div className="text-sm">Pelatihan Sedang Berjalan</div>{" "}
          </div>
          <div
            className="border border-black text-center text-2xl my-3 mx-7 flex flex-col justify-center items-center"
            style={{ height: "120px" }}
          >
            {"1 "}
            <div className="text-sm">Pelatihan Selesai</div>{" "}
          </div>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2">
        <div
          className=" border border-black mr-2 relative"
          style={{ height: "470px" }}
        >
          <div className=" mt-2 ml-2 font-bold">
            {" "}
            Grafik Jumlah Pelatihan Selesai Saya
          </div>
          <button
            className="border border-black mt-2 mx-3 text-sm absolute top-0 right-0 hover hover:bg-gray-400 hover:text-gray-900"
            style={{ height: "25px", width: "120px" }}
          >
            Unduh gambar
          </button>
          <br />
          <div>
            <Tc />
          </div>
        </div>
        <div
          className=" border border-black ml-2 relative"
          style={{ height: "470px" }}
        >
          <div className=" mt-2 ml-2 font-bold"> Total Pelatihan</div>
          <button
            className="border border-black mt-2 mx-3 text-sm absolute top-0 right-0 hover hover:bg-gray-400 hover:text-gray-900"
            style={{ height: "25px", width: "120px" }}
          >
            Unduh gambar
          </button>
          <br />
          <div>
            <Dnt />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dpi;
