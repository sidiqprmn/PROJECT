import React from "react";
import { Link } from "react-router-dom";

const SidebarProfile = ({ activeMenu, setActiveMenu, userData }) => {
  const menuItems = [
    { title: "Dashboard", link: "/DP" },
    { title: "Pelatihan saya", link: "/DPS" },
    { title: "Sertifikat", link: "/SR" },
    { title: "Payment history", link: "/payment" },
    { title: "Akun", link: "/akunpage" },
  ];

  return (
    <div>
      <div className="bg-gray-900 text-white h-full w-56 py-8 flex flex-col ">
        <div className="ml-5">
          <img
            src="https://placekitten.com/100/100"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-lg mt-2 font-semibold">{userData.username}</h2>
          <p className="text-gray-500 mb-6 mt-2 text-sm">{userData.email}</p>
        </div>
        <nav className="flex flex-col ml-5">
          {menuItems.map((menuItem, index) => (
            <Link
              key={index}
              to={menuItem.link}
              className={`mb-2 mt-2 hover:text-blue-500  ${
                activeMenu === menuItem.title
                  ? "text-blue-500 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveMenu(menuItem.title)}
            >
              {menuItem.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarProfile;
