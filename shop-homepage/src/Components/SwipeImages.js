import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const data = [
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/9b733ceda7b34ffc.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/94778236685e9f20.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f478a106d047aba.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eb50a8b740d3234f.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0c0c259c408bd7c0.jpg?q=20",
];

function SwipeImages() {
  return (
    <div className="mb-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        autoplay={true}
        className="swiper_container mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="autoplay play">
                  <img
                    className="card-img"
                    src={item}
                    alt="profile"
                  />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipeImages;
