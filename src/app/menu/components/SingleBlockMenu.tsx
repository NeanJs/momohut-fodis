"use client";
import React, { useState, useEffect } from "react";
import { BodyWrapper, ContentWrapper } from "@/components/ui/Wrapper";
import { GiKnifeFork } from "react-icons/gi";
import MenuSidebar from "./Sidebar";
import MenuData from "./Menu.json";
import Button from "@/components/global/Button";
import { object } from "framer-motion/client";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  variation: object;
}

interface Category {
  category: string;
  items: MenuItemProps[];
}

type MenuDataProps = {
  [category: string]: MenuItemProps[];
};
//@ts-ignore
const menudata: MenuDataProps = MenuData;
const MenuSection = () => {
  const categories = Object.keys(menudata);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menu, setMenu] = useState<MenuItemProps[]>([]);

  const menuItems: Category[] = [];

  // Handle category change and filter items
  useEffect(() => {
    const newMenuItems =
      selectedCategory === "All"
        ? menuItems.flatMap((category) => category.items)
        : menuItems.find((category) => category.category === selectedCategory)
            ?.items || [];
    setMenu(newMenuItems);
  }, [selectedCategory]);

  return (
    <BodyWrapper className="bg-momo_bg">
      <MenuSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ContentWrapper className="flex-col bg-white p-10">
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-primary">MomoHut Menu</h2>
        </div>
        <div className="py-6 grid-cols-1">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col gap-2 my-4">
              <span className="font-bold text-2xl my-2">{category}</span>
              <hr className="border-t-2 border-gray-200 mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {menudata[category].map(
                  (food: MenuItemProps, index: number) => (
                    <MenuItemCard item={food} key={index} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu.map((item, index) => (
            <MenuItemCard item={item} key={index} />
          ))}
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

const MenuItemCard = ({ item }: { item: MenuItemProps }) => {
  const [quantity, setQuantity] = useState(1);
  const loadCart = () => {
    // const storedCart = localStorage.getItem("cart");
    // return storedCart ? storedCart : [];
  };

  const [cart, setCart] = useState(loadCart());
  // const handleAddToCart = (item: MenuItemProps, quantity: number) => {
  //   const updatedCart = [...cart, { ...item, quantity }];
  //   //@ts-ignore
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-700">${item.price}</p>
      <div className="flex items-center mt-4 space-x-2">
        <div className="flex items-center space-x-2">
          <button
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button
          className="ml-4 px-4 py-2 bg-momo_red text-white rounded-md"
          // onClick={() => handleAddToCart(item, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default MenuSection;
