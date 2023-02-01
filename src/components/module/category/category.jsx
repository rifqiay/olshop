import React from "react";
import tshirt from "../../../asset/img/t-shirt.svg";
import short from "../../../asset/img/short.svg";
import jacket from "../../../asset/img/jacket.svg";
import pants from "../../../asset/img/pants.svg";
import shoes from "../../../asset/img/shoes.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Category = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <img src={tshirt} alt="t-shirt" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={shoes} alt="shoes" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pants} alt="pants" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={jacket} alt="jacket" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={short} alt="short" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
