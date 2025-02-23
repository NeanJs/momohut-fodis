"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          What Our Customers Say
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-momo_red"
                />
                <p className="text-lg italic text-gray-700 mb-3">
                  "{testimonial.review}"
                </p>
                <h4 className="text-momo_red font-semibold">
                  {testimonial.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
