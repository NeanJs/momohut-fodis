import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const menuItems = [
  {
    id: 1,
    name: "Mutton Curry",
    price: "$15.99",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Curry.jpg",
  },
  {
    id: 2,
    name: "Chicken Thali",
    price: "$13.99",
    image:
      "https://img.freepik.com/premium-photo/special-chicken-thali-indian-cuisine-food-platter-consists-chicken-curry-lentils-jeera-rice-roti-onions-selective-focus_466689-74787.jpg",
  },
  {
    id: 3,
    name: "Veg Thali",
    price: "$11.99",
    image:
      "https://vanitascorner.com/wp-content/uploads/2020/06/Festive-Vegetarian-Thali.jpg",
  },
  {
    id: 4,
    name: "Aloo Tama",
    price: "$9.99",
    image:
      "https://www.slurrp.com/static/recipe/2021-01/aloo-tama-1612538949.jpg",
  },
  {
    id: 5,
    name: "Dal Bhat",
    price: "$10.99",
    image:
      "https://worldtravelchef.com/wp-content/uploads/2020/04/Dal-Bhat-Nepalese-Food.jpg",
  },
];

const MenuSection = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            MomoHut Foods Menu
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                title={item.name}
                price={item.price}
                image={item.image}
                buttonText="Order Now"
              />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default MenuSection;
