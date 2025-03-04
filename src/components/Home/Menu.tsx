"use client";
import React, { useEffect, useState } from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { GiKnifeFork } from "react-icons/gi";

const MenuSection = () => {
  const [category, setCategory] = useState<String>("Breakfast");

  const menuItems = [
    {
      category: "Breakfast",
      items: [
        {
          name: "Momo Dumplings",
          description:
            "Steamed dumplings filled with spiced meat or vegetables.",
          price: "$10.00",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Nepali Paratha",
          description: "Flaky and crispy bread served with curry.",
          price: "$8.00",
          image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe-500x500.jpg",
        },
        {
          name: "Momo",
          description: "Steamed dumplings filled with meat or vegetables.",
          price: "$12.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Veggie Momo",
          description: "Vegetarian steamed momo with seasonal vegetables.",
          price: "$10.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Chicken Momo",
          description:
            "Steamed chicken dumplings with a blend of Nepali spices.",
          price: "$15.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          name: "Chicken Momo",
          description:
            "Steamed or fried dumplings stuffed with seasoned chicken.",
          price: "$12.00",
          image: "/images/chicken-momo.jpg",
        },
        {
          name: "Mixed Momo Platter",
          description: "A variety of momo styles for a full experience.",
          price: "$20.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Nepali Thali",
          description: "Traditional platter with rice, dal, and vegetables.",
          price: "$15.00",
          image: "/images/nepali-thali.jpg",
        },
        {
          name: "Veggie Soup Momo",
          description: "Momos in a light and flavorful vegetable broth.",
          price: "$10.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Tandoori Momo",
          description: "Momos baked with a spicy tandoori marinade.",
          price: "$12.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      category: "Dinner",
      items: [
        {
          name: "Chowmein",
          description:
            "Stir-fried noodles with vegetables and your choice of meat.",
          price: "$14.00",
          image: "/images/chowmein.jpg",
        },
        {
          name: "Momo Soup",
          description: "Momos served in a flavorful broth with herbs.",
          price: "$9.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Beef Sekuwa",
          description: "Grilled beef skewers with Nepali spices.",
          price: "$18.00",
          image: "/images/beef-sekuwa.jpg",
        },
        {
          name: "Fried Momo",
          description: "Crispy fried momos with dipping sauce.",
          price: "$11.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Pork Momo",
          description: "Pork-filled steamed momo with a spicy kick.",
          price: "$16.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Momo Combo",
          description: "A combo of steamed, fried, and tandoori momos.",
          price: "$13.99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];

  const handleCategory = (category: String) => {
    setCategory(category);
    handleMenuItems(category);
  };
  const [menu, setMenu] = useState<
    { name: string; description: string; price: string; image: string }[]
  >(menuItems[0].items);
  const handleMenuItems = (category: String) => {
    const items = menuItems.find((item) => item.category === category);
    setMenu(items ? items.items : []);
  };
  useEffect(() => handleCategory("Breakfast"), []);
  return (
    <BodyWrapper className="bg-momo_bg">
      <ContentWrapper className="flex-col bg-white p-10">
        <div className="w-full h-full">
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-primary">MomoHut Menu</h2>
          </div>
          <div className="py-6 flex justify-center gap-16 items-center w-full flex-wrap">
            {menuItems.map((item) => (
              <h3
                className={`${
                  item.category === category ? "text-momo_red" : "text-gray-800"
                } text-lg md:text-2xl font-semibold flex items-center gap-2 cursor-pointer`}
                key={item.category}
                onClick={() => handleCategory(item.category)}
              >
                <GiKnifeFork />
                <span>{item.category}</span>
                <GiKnifeFork />
              </h3>
            ))}
          </div>
          <hr className="border-t-2 border-gray-200 mb-8" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap4">
            {menu.map((item: ItemProp, index: number) => (
              //  @ts-ignore
              <MenuItem item={item} key={index} />
            ))}
          </div>
          {/*
           */}
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default MenuSection;
interface ItemProp {
  name: string;
  description: string;
  price: string;
  image: string;
}
const MenuItem = (item: ItemProp) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between h-fit  hover:shadow-md py-4">
      <div className="w-full md:w-1/4 flex items-center justify-center ">
        <img
          src={item.image}
          className="size-24 object-cover rounded-full overflow-hidden"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4 items-center w-full text-center md:text-left">
        <div className="text-block w-full flex  flex-col">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-400">{item.description}</p>
        </div>
        <p className="text-gray-600 text-xl font-semibold w-full md:w-1/4 ">
          {item.price}
        </p>
      </div>
    </div>
  );
};
