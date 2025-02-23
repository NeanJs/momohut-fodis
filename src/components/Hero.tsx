"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    image:
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Dive into Our Handmade Momos",
    subtitle:
      "Tender dumplings filled with your choice of meat or veggies, expertly spiced and served with special sauces.",
    CTA: {
      title: "Explore our menu",
    },
  image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Book your momo party now",
    subtitle:
      "Reserve our party section for up to 20 guests or the entire restaurant for up to 70 guests.",
    CTA: {
      title: "Reserve Now",
    },
    image:
      "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState<Number>(0);
  return (
    <BodyWrapper className="relative w-screen h-screen md:h-[800px] overflow-hidden">
      <img
        src="https://momohut.ca/wp-content/uploads/2022/11/feature_bg_1.png"
        alt=""
        className="w-screen h-full object-cover scale-125 absolute -z-10 top-0 left-0"
      />
      <ContentWrapper className="h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div className="h-full flex items-center justify-center md:justify-between relative overflow-hidden flex-col md:flex-row">
                  {/* Text Content with Motion Effects */}
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
                      className="mt-4 bg-momo_red hover:bg-red-700 px-6 py-2 text-white rounded-lg"
                    >
                      {slide.CTA.title}
                    </motion.button>
                  </motion.div>

                  {/* Bowl Image with Motion Effects */}
                  <motion.img
                    src="bowl.png"
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
      </ContentWrapper>
    </BodyWrapper>
  );
}

const AlternateSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {({ isActive }) => (
            <div className="h-full flex items-center justify-center md:justify-between relative overflow-hidden flex-col md:flex-row px-6">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col md:w-2/4 text-gray-800 leading-loose"
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-red-600 text-2xl mb-4 font-medium tracking-wide"
                >
                  Special Menu Offers
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  className="text-lg md:text-xl mt-2"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isActive ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                  className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-lg"
                >
                  {slide.CTA.title}
                </motion.button>
              </motion.div>
              {/* Image */}
              <motion.img
                src={slide.image}
                alt="Slide Image"
                className="w-[500px] hidden md:block"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
