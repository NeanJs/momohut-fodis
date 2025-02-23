import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const specialDishes = [
  {
    id: 1,
    name: "Spicy Buff Momo",
    description: "Juicy buffalo momos with spicy chutney",
    image: "/buff-momo.jpg",
  },
  {
    id: 2,
    name: "Chicken Sekuwa",
    description: "Grilled Nepali-style chicken with herbs",
    image: "/chicken-sekuwa.jpg",
  },
  {
    id: 3,
    name: "Newari Khaja Set",
    description: "Traditional Newari feast with beaten rice",
    image: "/newari-khaja.jpg",
  },
];

const SpecialDishes = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            Today's Special Dishes
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specialDishes.map((item) => (
              <MenuItem
                key={item.id}
                title={item.name}
                description={item.description}
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

export default SpecialDishes;
