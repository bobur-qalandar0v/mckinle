import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide><h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p></SwiperSlide>
        <SwiperSlide><h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p></SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper__title">
            The team at McKinley always delivers thoughtful and professional
            legal services in a timely manner.
          </h1>
          <p className="swiper__subtitle">John Smith, Tax Law Client</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
