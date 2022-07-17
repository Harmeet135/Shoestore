import "./test.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "../../assests/page1.jpeg";
import p2 from "../../assests/page2.jpeg";
import p3 from "../../assests/page3.jpeg";
import p4 from "../../assests/page4.jpeg";
// import p5 from "../../assests/page5.jpeg";
import p6 from "../../assests/page6.jpeg";
import p7 from "../../assests/page7.jpeg";
import p8 from "../../assests/page8.jpeg";
import p9 from "../../assests/page9.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Aside from "../../components/aside/Aside";

const Test = () => {
  return (
    <>
      <div className="box">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={p1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p4} alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={p5} alt="" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={p6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Aside />
    </>
  );
};
export default Test;
