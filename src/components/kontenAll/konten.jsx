import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import "./konten.css";
import ContentSwiper from "./contentSwiper";

const Konten = () => {
  return (
    <div className="konten mt-[30px] mb-5 pe-[60px] ps-[30px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContentSwiper img="./assets/konten/konten1.jpg" konten="Kategori A" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/konten/konten2.jpg"
            konten="Kategori B"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/konten/konten3.jpg"
            konten="Kategori C"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/konten/konten6.jpg" konten="Kategori D" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/konten/konten5.jpg" konten="Kategori E" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/konten/konten3.jpg"
            konten="Kategori F"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/konten/konten2.jpg"
            konten="Kategori G"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/konten/konten5.jpg"
            konten="Kategori H"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Konten;
