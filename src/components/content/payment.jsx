import React from "react";
import { FaSearch } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Pagination } from "antd";

const Payment = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Recent
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
          Oldest
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
          Judul Pelatihan
        </a>
      ),
    },
  ];

  return (
    <>
      <h1 className="font-extrabold text-2xl mb-8">Payment History</h1>
      <div className="flex mb-3 ">
        <div className="shadow-md bg-white px-16 py-2 rounded-md my-1 hover:bg-gray-100">
          <Dropdown
            className="mt-10"
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Sort By
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex shadow-md items-center ml-auto bg-white px-2 my-1 rounded">
          <div className="ml-3">
            <FaSearch className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Cari Kode Registrasi..."
            className="bg-transparent border-none flex-grow focus:ring-0 "
          />
        </div>
      </div>

      <div className="border  w-full h-52 mt-11 bg-white">
        <div className="flex">
          <img src="/assets/hacker.jpg" className="w-44 h-44 my-3 ml-4" />
          <div className="flex-col mt-3 ml-4">
            <div className="flex-col">
              <h1 className="font-bold text-lg ml-[14px]">Judul Pelatihan</h1>
              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base ">Kode Registrasi</h2>
                  <p>Psj12RtaL3</p>
                </div>
                <div className="ml-36">
                  <h2 className="font-bold text-base ">Kategori</h2>
                  <p>Kategori A</p>
                </div>
                <div className="ml-64">
                  <h2 className="font-bold text-base ">Status Pembayaran</h2>
                  <p>Waiting</p>
                </div>
              </div>

              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base mt-4 ">Harga</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[184px] mt-4">
                  <h2 className="font-bold text-base ">Total Bayar</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[248px] mt-8">
                  <button className="border text-white bg-red-600 rounded-lg hover:bg-red-500 px-4 py-1">
                    Lanjutkan Pembayaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-full h-52 mt-11 bg-white">
        <div className="flex">
          <img src="/assets/hacker.jpg" className="w-44 h-44 my-3 ml-4" />
          <div className="flex-col mt-3 ml-4">
            <div className="flex-col">
              <h1 className="font-bold text-lg ml-[14px]">Judul Pelatihan</h1>
              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base ">Kode Registrasi</h2>
                  <p>Psj12RtaL3</p>
                </div>
                <div className="ml-36">
                  <h2 className="font-bold text-base ">Kategori</h2>
                  <p>Kategori A</p>
                </div>
                <div className="ml-64">
                  <h2 className="font-bold text-base ">Status Pembayaran</h2>
                  <p>Sukses</p>
                </div>
              </div>

              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base mt-4 ">Harga</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[184px] mt-4">
                  <h2 className="font-bold text-base ">Total Bayar</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[248px] mt-8">
                  <button className="border text-white bg-red-600 rounded-lg hover:bg-red-500 px-4 py-1">
                    Lihat Pelatihan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-full h-52 mt-11 bg-white">
        <div className="flex">
          <img src="/assets/hacker.jpg" className="w-44 h-44 my-3 ml-4" />
          <div className="flex-col mt-3 ml-4">
            <div className="flex-col">
              <h1 className="font-bold text-lg ml-[14px]">Judul Pelatihan</h1>
              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base ">Kode Registrasi</h2>
                  <p>Psj12RtaL3</p>
                </div>
                <div className="ml-36">
                  <h2 className="font-bold text-base ">Kategori</h2>
                  <p>Kategori A</p>
                </div>
                <div className="ml-64">
                  <h2 className="font-bold text-base ">Status Pembayaran</h2>
                  <p>Ditolak</p>
                </div>
              </div>

              <div className="flex mt-3 ml-4">
                <div>
                  <h2 className="font-bold text-base mt-4 ">Harga</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[184px] mt-4">
                  <h2 className="font-bold text-base ">Total Bayar</h2>
                  <p>Rp 100,000</p>
                </div>
                <div className="ml-[248px] mt-4">
                  <h2 className="font-bold text-base ">Alasan</h2>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <Pagination total={5000} />
      </div>
    </>
  );
};

export default Payment;
