import React from "react";
// import ContentAdminFinal from "../components/content/homeContentFinal";
// import Konten from "../components/kontenAll/konten";
import NavigationBar from "../components/layout/navigationBar/navigationBar";
// import Card from "../components/kontenAll/card";
// import Card from "../components/card/kategori";


const HomeLogin = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <NavigationBar />
        <div className="hero w-full h-[42rem]">
          {/* <ContentAdminFinal /> */}
          {/* <Card /> */}
        </div>
      </div>
      {/* <Konten /> */}
    </React.Fragment>
  );
};

export default HomeLogin;
