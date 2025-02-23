"use client";
import React from "react";
// @ts-ignore
import Slider from "react-slick"; // Importing the react-slick carousel
/* slick-carousel styles */

import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";
import { CiForkAndKnife } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";

const foods = [
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12.99",
    name: "Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "10.99",
    name: "Veggie Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15.99",
    name: "Chicken Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8.99",
    name: "Steamed Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "14.99",
    name: "Beef Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "11.99",
    name: "Fried Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "16.99",
    name: "Pork Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "13.99",
    name: "Momo Combo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9.99",
    name: "Momo Soup",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "10.99",
    name: "Veggie Soup Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12.99",
    name: "Tandoori Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "14.99",
    name: "Chicken Tikka Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "18.99",
    name: "Lamb Momo",
    orderlink: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "20.99",
    name: "Mixed Momo Platter",
    orderlink: "#",
  },
];

const SpecialsMenu = () => {
  const MenuItem = ({ image, price, name, orderlink }: any) => {
    return (
      <div className="bg-white rounded-lg shadow-lg w-72 h-fit p-4 my-4 grid place-items-center">
        <img
          src={image}
          alt="Food Item"
          className="w-56 h-56 object-cover rounded-full"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">${price}</p>
          <button className="mt-4 bg-momo_red text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <BodyWrapper className="bg-gray-50 py-20">
      <ContentWrapper>
        <div className="container mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center gap-2 justify-center text-momo_red font-semibold">
            <GiKnifeFork />
            <span>Best Food</span>
            <GiKnifeFork />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Popular Food Menu
          </h2>

          {/* Slick Slider for Horizontal Scroll */}
          <Slider {...settings} className="w-full">
            {foods.map((food, index) => (
              <MenuItem
                key={index}
                image={food.image}
                price={food.price}
                name={food.name}
                orderlink={food.orderlink}
              />
            ))}
          </Slider>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default SpecialsMenu;
