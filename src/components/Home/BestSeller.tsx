import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";

const menuItems = [
  {
    name: "Italian Pasta",
    description: "Neque Porro Est...",
    price: "10.00",
    image: "/pasta.jpg",
  },
  {
    name: "Italian Fried Rice",
    description: "Neque Porro Est...",
    price: "12.00",
    image: "/fried_rice.jpg",
  },
  {
    name: "Fish & White Rice",
    description: "Neque Porro Est...",
    price: "33.00",
    image: "/fish_rice.jpg",
  },
  {
    name: "Pasta & Meat",
    description: "Neque Porro Est...",
    price: "35.00",
    image: "/pasta_meat.jpg",
  },
  {
    name: "Brief Chicken",
    description: "Neque Porro Est...",
    price: "14.00",
    image: "/chicken.jpg",
  },
];

const BestSellers = () => {
  return (
    <BodyWrapper className="bg-momo_bg">
      <ContentWrapper>
        <section className="py-16 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row gap-2 font-extrabold text-md uppercase text-momo_red items-center">
              <LuSoup />
              <span className="">Our Best Sellers</span>
              <LuSoup />
            </div>
            <h2 className="text-4xl font-extrabold text-primary">
              Best Selling Dishes
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap w-full h-full md:justify-between gap-6 justify-center">
            {menuItems.map((item, index) => (
              <MenuItemCard className={""} key={index} item={item} addOns />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default BestSellers;
interface MenuItemProps {
  item: {
    name: String;
    price: String;
    description: String;
    image: String;
  };
  addOns: Boolean;
  className: String;
}
export const MenuItemCard = ({ item, addOns, className }: MenuItemProps) => {
  return (
    <div
      className={`relative px-4  shadow-lg transition-all w-60 h-80 flex flex-col justify-center group overflow-hidden bg-white  ${className} ${
        !addOns && "bg-white"
      } my-4 py-8 rounded-lg`}
    >
      {addOns && (
        <img
          className="w-full h-full object-cover  absolute inset-0 opacity-0 scale-100 group-hover:scale-150 group-hover:opacity-100 ease-linear duration-300 "
          src="https://gramentheme.com/wp/fodis/wp-content/themes/fodis/assets/img/dishesThumbBG.png"
          alt=""
        />
      )}
      {addOns && (
        <div className="absolute top-2 right-2 bg-momo_red p-2 rounded-full">
          <FaRegHeart className={"  text-white"} />
        </div>
      )}
      <div className="flex justify-center z-10">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJnlG8BRROeCbvzcieUfxSM1qNeh0pH2XQQ&s"
          }
          alt=""
          className="rounded-full object-cover size-40"
        />
      </div>
      <div className="text-center mt-8 z-10 flex flex-col gap-1">
        <h3 className="font-semibold text-xl group-hover:text-white">
          {item.name}
        </h3>
        <p className="text-sm opacity-70 group-hover:text-white">
          {item.description}
        </p>
        <p
          className={`mt-2 font-bold text-momo_red group-hover:text-white text-xl`}
        >
          ${item.price}
        </p>
      </div>
      {addOns && (
        <div className="absolute top-2 left-2 space-y-2">
          <FaPlus className="text-white" />
          <FaMinus className="text-white" />
        </div>
      )}
    </div>
  );
};
