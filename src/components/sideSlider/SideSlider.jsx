import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dataSideSlider from "./SideSliderData";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SideSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

function SideSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div className="row" style={{ maxWidth: "800px", maxHeight: "600px" }}>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {dataSideSlider.map((photo) => (
          <SwiperSlide key={photo.src}>
            <img
              src={photo.src}
              alt="slide_image"
              width="800"
              height="600"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-control">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default SideSlider;
