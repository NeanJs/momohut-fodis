import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";

const testimonials = [
  {
    id: 1,
    name: "Priya Rai",
    feedback:
      "The food here is absolutely delicious! A true taste of Nepal and India.",
    image: "/customer1.jpg",
  },
  {
    id: 2,
    name: "Amit Gurung",
    feedback: "Great service and mouthwatering momos! Highly recommend.",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    name: "Sita Shrestha",
    feedback: "A perfect blend of flavors. I always enjoy dining at MomoHut!",
    image: "/customer3.jpg",
  },
];

const Testimonials = () => {
  return (
    <BodyWrapper className="bg-gray-800">
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg  p-6 text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
                <p className="mt-4 text-lg text-gray-600">
                  {testimonial.feedback}
                </p>
                <h3 className="mt-4 text-xl font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Testimonials;
