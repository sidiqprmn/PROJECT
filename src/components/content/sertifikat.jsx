import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { FaSearch } from "react-icons/fa";

const items = [
  {
    key: "0",
    label: <p className="font-bold mb-1 mx-20">Pilih Kategori</p>,
  },
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Kategori 1
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Kategori 2
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Kategori 3
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Kategori 4
      </a>
    ),
  },
];

const Sertifikat = () => {
  return (
    <>
      <div className="mb-6">
        <p className="font-bold text-3xl">Sertifikat Saya</p>
      </div>
      <div className="flex mb-3 ">
        <div className="shadow-md bg-white px-16 py-2 rounded-md hover mb-3 hover:bg-gray-100">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Pilih Kategori
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex shadow-md items-center ml-auto bg-white px-2 mb-3 rounded">
          <div className="ml-3">
            <FaSearch className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Cari Sertifikat..."
            className="bg-transparent border-none flex-grow focus:ring-0"
          />
        </div>
      </div>

      <div className="w-full h-52 flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-6">
        <img
          className="h-52 w-52 object-cover md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-3">
          <p className="mb-3 mt-2 text-2xl font-bold text-neutral-800 dark:text-neutral-50">
            Judul Pelatihan
          </p>
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded-lg hover hover:bg-gray-300 mt-2 mb-2"
          >
            Kategori A
          </button>
          <p className="mt-4">ID Sertifikat : Unknown</p>
        </div>
        <div className="flex items-center ml-auto">
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded hover hover:bg-gray-300 ml-auto mr-7 py-3 px-5"
          >
            Unduh Sertifikat
          </button>
        </div>
      </div>

      <div className="w-full h-52 flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-6">
        <img
          className="h-52 w-52 object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-3">
          <p className="mb-3 mt-2 text-2xl font-bold text-neutral-800 dark:text-neutral-50">
            Judul Pelatihan
          </p>
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded-lg hover hover:bg-gray-300 mt-2 mb-2"
          >
            Kategori A
          </button>
          <p className="mt-4">ID Sertifikat : Unknown</p>
        </div>
        <div className="flex items-center ml-auto">
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded hover hover:bg-gray-300 ml-auto mr-7 py-3 px-5"
          >
            Unduh Sertifikat
          </button>
        </div>
      </div>

      <div className="w-full h-52 flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-70 mb-6">
        <img
          className="h-52 w-52 object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-3">
          <p className="mb-3 mt-2 text-2xl font-bold text-neutral-800 dark:text-neutral-50">
            Judul Pelatihan
          </p>
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded-lg hover hover:bg-gray-300 mt-2 mb-2"
          >
            Kategori A
          </button>
          <p className="mt-4">ID Sertifikat : Unknown</p>
        </div>
        <div className="flex items-center ml-auto">
          <button
            type="button"
            onClick={() => BUT("#")}
            className="border border-black rounded hover hover:bg-gray-300 ml-auto mr-7 py-3 px-5"
          >
            Unduh Sertifikat
          </button>
        </div>
      </div>
    </>
  );
};
export default Sertifikat;
