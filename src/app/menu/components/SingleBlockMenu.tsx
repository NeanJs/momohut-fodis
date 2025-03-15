"use client";
import React, { useState, useEffect } from "react";
import { BodyWrapper, ContentWrapper } from "@/components/ui/Wrapper";
import { GiKnifeFork } from "react-icons/gi";
import MenuSidebar from "./Sidebar";
import menudata from "./Menu.json";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Category {
  category: string;
  items: MenuItemProps[];
}

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
                {menudata[category].map((food, index) => (
                  <MenuItem item={food} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))}
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

const MenuItem = ({ item }: { item: MenuItemProps }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform hover:scale-105">
      <img src={item.image} className="w-32 h-32 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
      <p className="text-gray-500 text-sm text-center px-2">
        {item.description}
      </p>
      <p className="text-primary font-semibold text-lg mt-2">{item.price}</p>
    </div>
  );
};

export default MenuSection;
