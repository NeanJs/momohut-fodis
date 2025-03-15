"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { motion } from "framer-motion";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const slides = [
  {
    id: 1,
    title: "Experience Nepal, One Bite at a Time",
    subtitle: "Savor the finest Nepalese and Indo-Chinese dishes in Vancouver.",
    CTA: {
      title: "Explore our menu",
    },
    image: "https://momohut.ca/wp-content/uploads/2023/03/Biryani.png.webp",
  },
  {
    id: 2,
    title: "Dive into Our Handmade Momos",
    subtitle:
      "Tender dumplings filled with your choice of meat or veggies, expertly spiced and served with special sauces.",
    CTA: {
      title: "Explore our menu",
    },
    image: "https://momohut.ca/wp-content/uploads/2023/03/Momo3.png.webp",
  },
  {
    id: 3,
    title: "Book your momo party now",
    subtitle:
      "Reserve our party section for up to 20 guests or the entire restaurant for up to 70 guests.",
    CTA: {
      title: "Reserve Now",
    },
    image: "https://momohut.ca/wp-content/uploads/2023/03/Chowmin.png.webp",
  },
];

export function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <BodyWrapper className="relative w-screen h-screen md:h-[800px]">
      <img
        src="https://momohut.ca/wp-content/uploads/layerslider/projects/Home-Two-Desktop/hero_bg_2_1.png"
        className="w-screen h-full object-cover scale-100 absolute -z-10 top-0 left-0 object-top"
      />
      <ContentWrapper className="h-full">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="h-full flex items-center justify-center md:justify-between relative overflow-hidden flex-col md:flex-row ">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col h-full md:w-2/4 items-start justify-center text-momo_gray px-6 leading-loose"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-momo_red text-2xl mb-4 font-medium tracking-wide"
                    >
                      Special Menu Offers
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="text-4xl md:text-5xl font-bold"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                      className="text-lg md:text-xl mt-2"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                      className="mt-4 bg-momo_red hover:bg-red-700 px-6 py-2 text-white "
                    >
                      {slide.CTA.title}
                    </motion.button>
                  </motion.div>

                  {/* Bowl Image with Motion Effects */}
                  <motion.img
                    src={slide.image}
                    alt="Bowl"
                    className="w-[500px]"
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={
                      isActive ? { opacity: 1, scale: 1, rotate: 0 } : {}
                    }
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
      </ContentWrapper>
      <div className=" absolute flex items-center justify-center flex-col top-0 left-0 w-32 h-full">
        <span className="bg-gradient-to-t from-momo_red to-transparent h-16 w-[2px] rounded-b-full"></span>

        <Swiper
          // @ts-ignore
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          className="mb-4 w-fit h-max"
          direction="vertical"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img
                src={src.image}
                alt={`Thumbnail ${index + 1}`}
                className={`${
                  activeSlide == index ? "border-momo_red" : "border-gray-300 opacity-75"
                } "w-16 h-16 object-cover my-2 rounded-full border-2 hover:border-red-500 transition duration-300 ease-linear"`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="bg-gradient-to-b from-momo_red to-transparent h-16 w-[2px] rounded-t-full"></span>
      </div>
    </BodyWrapper>
  );
}
