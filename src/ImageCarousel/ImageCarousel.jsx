import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "./Beachbody-Logo-3-300x169.png";
import Img2 from "./IMG_2394-300x169.jpg";
import Img3 from "./Samsung-Logo-2-300x169.png";
import Img4 from "./Upayments-300x182.webp";
import Img5 from "./nike4321-300x149.png";

import "./ImageCarousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImageCarousel() {
  return (
    <div>
      <Carousel />
    </div>
  );
}
const images = [Img1, Img2, Img3, Img4, Img5];
function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
   
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((e) => {
          return (
            <SwiperSlide>
              <img src={e} alt={e} />
            </SwiperSlide>
          );
        })}
   
      </Swiper>
    </>
  );
}
