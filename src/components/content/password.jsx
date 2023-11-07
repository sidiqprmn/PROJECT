import React from "react";
import { Input, Space } from "antd";
import MyFooter from "../layout/footer/footer";
import NavigationBar from "../layout/navigationBar/navigationBar";

const Password = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="border border-black w-1/3 p-5">
          <h1 className="text-2xl font-bold mt-5 mb-6">Ganti Sandi</h1>
          <div className="flex flex-col mb-4">
            <label>Kata sandi lama</label>
            <Space direction="vertical">
              <Input.Password
                placeholder="Masukkan kata sandi lama"
                className="mb-2"
              />
            </Space>
          </div>
          <div className="flex flex-col mb-4">
            <label>Kata sandi baru</label>
            <Space direction="vertical">
              <Input.Password
                placeholder="Masukkan kata sandi baru"
                className="mb-2"
              />
            </Space>
          </div>
          <div className="flex flex-col mb-6">
            <label>Konfirmasi Kata sandi baru</label>
            <Space direction="vertical">
              <Input.Password
                placeholder="Konfirmasi kata sandi baru"
                className="mb-2"
              />
            </Space>
          </div>
          <div className="flex justify-center">
            <button className="border border-black rounded px-5 py-2">
              Simpan
            </button>
          </div>
        </form>
      </div>
      <MyFooter />
    </>
  );
};

export default Password;
