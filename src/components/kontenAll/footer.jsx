import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <div>
        <span>NusaKMS</span>
        <span style={{ margin: "0 10px" }}>|</span>
        <span>About</span>
        <span style={{ margin: "0 10px" }}>|</span>
        <span>Service</span>
      </div>
      <div>
        <span>NusaKMS 2023</span>
      </div>
      <div>
        <span>Help Center</span>
      </div>
      <div>
        <span>Cek Sertifikat</span>
      </div>
    </Footer>
  );
};

export default AppFooter;
