"use client";
import React from "react";
// @ts-ignore
import Slider from "react-slick"; // Importing the react-slick carousel
/* slick-carousel styles */

import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";
import { CiForkAndKnife } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { MenuItemCard } from "./Home/BestSeller";

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

const PopularItems = () => {
  const MenuItem = ({ item }: any) => {
    return (
      <div className="relative shadow-lg transition-all size-60 flex flex-col rounded-lg justify-center group overflow-hidden my-4 bg-white">
        <div className="flex justify-center z-10">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJnlG8BRROeCbvzcieUfxSM1qNeh0pH2XQQ&s"
            }
            alt={item.name}
            className="rounded-full object-cover size-24"
          />
        </div>
        <div className="text-center mt-4 z-10 flex flex-col gap-1">
          <h3 className="font-semibold text-lg group-hover:">{item.name}</h3>
          <p className="text-sm opacity-70 group-hover:">lorem ipsum dolor</p>
          <p className={`mt-2 font-bold text-momo_red group-hover: text-xl`}>
            ${item.price}
          </p>
        </div>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    overflow: "visible",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <BodyWrapper
      className=" py-20 relative popular-items bg-momo_bg"
      backgroundColor="#F3F1EA"
    >
      <img
        className="absolute bottom-0 left-0 "
        src="https://gramentheme.com/wp/fodis/wp-content/uploads/2024/12/bestFoodItemsShape1_1.png"
        alt=""
      />
      <img
        src="https://gramentheme.com/wp/fodis/wp-content/uploads/2024/12/bestFoodItemsShape1_2.png"
        className="absolute top-8 right-10 scale-150"
        alt=""
      />
      <ContentWrapper>
        <div
          className="relative container mx-auto text-center "
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 justify-center text-momo_red font-semibold">
            <GiKnifeFork />
            <span>Best Food</span>
            <GiKnifeFork />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Popular Food Menu
          </h2>

          <Slider {...settings} className="w-full z-10 " arrows={false}>
            {foods.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </Slider>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default PopularItems;
