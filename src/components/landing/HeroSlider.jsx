import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/banner/banner.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Indonesia",
    subtitle: "Pixel perfect design with awesome contents",
    image:img1,
  },
  {
    title: "Australia",
    subtitle: "Pixel perfect design with awesome contents",
    image:img2,
  },
  {
    title: "Switzerland",
    subtitle: "Pixel perfect design with awesome contents",
    image:
      img3,
  },
];

const HeroSlider = () => {
  return (
    <div className="relative  w-[100vw] h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation={false}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-5xl font-bold font-[cursive] mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg">{slide.subtitle}</p>
                <Link to={"/tours"}
                  href="#"
                  className="inline-block bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
