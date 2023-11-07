import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import CardObjek from "../card/cardObjek";

const HomeContent = () => {
  return (
    <div>
      <img
        className="h-[650px] w-full object-cover object-center"
        src="https://img.freepik.com/free-photo/young-stylish-asian-man-sitting-cafe-with-laptop-writing-notebook_1098-17605.jpg?w=740&t=st=1695005605~exp=1695006205~hmac=4eedabcfc1962526306c2d8ebd78a3cae0a374a0414efe967f3a2c942562c6cf"
        alt="cover image"
      />
      <div className="container mx-auto ">
        <div class="mt-[-40px] m-[150px] pl-[900px] p-[70px] bg-[#35526C] border shadow-xl border-black rounded-lg dark:bg-gray-800 dark:border-gray-700 absolute ">
          <div className="flex"></div>
        </div>
      </div>
      <section className=" h-[48rem] bg-[#D7E6FD] px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="h-[10rem]"></div>
          <div className="mt-[60px] flex flex-wrap items-center">
            <div className="mx-auto  ml-10 -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 font-bold"
                color="blue-gray"
                style={{ fontFamily: "DM Serif Text, serif" }}
              >
                Fitur-Fitur Yang kami sediakan
              </Typography>
              <Typography
                className="mb-8 text-3xl text text-black"
                style={{ fontFamily: "IBM Plex Serif, serif" }}
              >
                Kita memfasilitasi dengan memberikan berbagai fitur yang menarik
                dan terbaik untuk mengembangkan ekosistem IT anak bangsa. Dari
                Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh
                Pengembangan Proyek. <br />
                <br />
              </Typography>
            </div>
          </div>
          <div className="container mt-10">
            <div class="mt-[-40px] m-[150px] pl-[150px] p-[70px] bg-[#35526C] border shadow-xl border-black rounded-lg dark:bg-gray-800 dark:border-gray-700 absolute ">
              <div className="flex">
              </div>
            </div>
            <div class="mt-[-40px] ml-[900px] m-[150px] pl-[150px] p-[70px] bg-[#35526C] border shadow-xl border-black rounded-lg dark:bg-gray-800 dark:border-gray-700 absolute ">
              <div className="flex"></div>
            </div>
            <div class="mt-[-40px] ml-[500px] m-[150px] pl-[150px] p-[70px] bg-[#35526C] border shadow-xl border-black rounded-lg dark:bg-gray-800 dark:border-gray-700 absolute ">
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-[60rem] bg-[rgb(71,106,135)] px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <CardObjek />
        </div>
      </section>
      <section className=" h-[60rem] bg-[#D7E6FD] px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            className="mt-10 mx-[15rem]"
            color="blue-gray"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tentang Situs dan Komunitas Ini
          </Typography>
          <Typography
            variant="h3"
            className="mt-5 mx-[10rem] font-light text-center"
            color="blue-gray"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tentang situs inii, seperti apa, bagaimana, mungkin juga berisi visi
            misi. serta akan di isi pertanyaan singkat.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
