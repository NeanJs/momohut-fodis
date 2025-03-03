"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

import { GiKnifeFork } from "react-icons/gi";
import { BsFillChatRightQuoteFill } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Anish Thapa",
    review:
      "Absolutely loved the food! The flavors were rich and authentic. The best Nepalese cuisine I’ve had in a long time.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Carter",
    review:
      "Fast delivery and amazing service! The momo were fresh, hot, and delicious. Highly recommend this place.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    review:
      "MomoHut never disappoints. Their dishes are packed with flavor and authenticity. A must-visit for food lovers!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export function Testimonials() {
  return (
    <BodyWrapper className="bg-[#181818] min-h-[60vh] h-fit relative">
      <img
        className="absolute -left-20 top-0 h-full object-cover rounded-tr-full border-t-momo_red border-t-8"
        src="https://gramentheme.com/wp/fodis/wp-content/uploads/2024/12/testimonialThumb1_1.png"
        alt=""
      />
      <ContentWrapper className="flex-col border-red-400 justify-start items-start relative overflow-hidden">
        <div className="flex flex-col items-center md:ml-96 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div className="text-momo_red font-semibold text-sm md:text-lg flex items-center gap-2 uppercase">
              <GiKnifeFork />
              <span> Testimonials</span>
              <GiKnifeFork />
            </motion.div>
            <motion.h2 className="text-lg md:text-3xl font-bold text-white ">
              What Our Customers Say
            </motion.h2>
          </motion.div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full md:max-w-xl"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 shadow-lg flex flex-col items-start w-full border-t-4 border-momo_red rounded-lg"
                >
                  <BsFillChatRightQuoteFill className="text-2xl md:text-5xl text-momo_red font-extrabold absolute right-8" />
                  <div className="flex items-center mb-4 gap-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover  border-momo_red"
                    />
                    <div className="flex flex-col items-start">
                      <h4 className="text-black font-semibold text-sm md:text-lg ">
                        {testimonial.name}
                      </h4>
                      <span className="text-sm md:text-md">
                        Event Management
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 text-left text-sm md:text-md">
                    {testimonial.review}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default Testimonials;
