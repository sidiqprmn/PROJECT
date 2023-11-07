import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import HomeContent from "../components/content/homeContent";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <HomeContent />
      </div>
    </React.Fragment>
  );
};

export default Home;
