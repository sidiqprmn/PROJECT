import React, { useState, useEffect } from "react";
import SidebarProfile from "../components/layout/sidebar/sidebar";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
import Akun from "../components/content/akun";
import MyFooter from "../components/layout/footer/footer";
import axios from "axios";

const AkunPage = () => {
  const [activeMenu, setActiveMenu] = useState("Akun");
  const [userData, setUserData] = useState({ username: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3100/user/2`)
      .then((response) => {
        console.log("User Data:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <NavigationBar />

      <div className="flex-row flex">
        <SidebarProfile
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          userData={userData}
        />
        <main className="flex-1 p-8">
          <Akun />
        </main>
      </div>
      <MyFooter />
    </>
  );
};

export default AkunPage;
