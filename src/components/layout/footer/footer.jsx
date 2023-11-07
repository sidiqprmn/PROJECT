// Footer.js
import React from "react";
import { Layout } from "antd";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const { Footer } = Layout;

const FooterColumn = ({ title, children }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const MyFooter = () => {
  return (
    <Layout>
      <Footer className="border-t border-black bg-white h-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4 ">
            <FooterColumn title="Nusalearning">
              <a href="#">2022 NusaLearning</a>
              <br />
              <a href="#">All right reserved</a>
              <br />
              <a href="#">PT. Solusi Teknologi Nusantara</a>
            </FooterColumn>
            <FooterColumn title="About">
              <a href="#">Privacy Policy</a>
              <br />
              <a href="#">Help Center</a>
              <br />
              <a href="#">Terms & Condition</a>
            </FooterColumn>
            <FooterColumn title="Services">
              <a href="#">Check Certificate</a>
            </FooterColumn>
            <FooterColumn title="Follow Us On">
              <div>
                <a href="https://www.facebook.com">
                  <FaFacebook className="text-2xl mr-2 inline-block" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="text-2xl mr-2 inline-block" />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter className="text-2xl mr-2 inline-block" />
                </a>
                <a href="https://www.youtube.com">
                  <FaYoutube className="text-2xl inline-block" />
                </a>
              </div>
            </FooterColumn>
            <FooterColumn title="Download NusaLMS Mobile">
              <div className="flex justify-center space-x-4">
                <a
                  href="https://play.google.com/store"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Play Store
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                >
                  App Store
                </a>
              </div>
            </FooterColumn>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MyFooter;
