import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const specialDishes = [
  {
    id: 1,
    name: "Spicy Buff Momo",
    description: "Juicy buffalo momos with spicy chutney",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0Io8K5tq434NMnXiuEC1YSqiWsVhMQQ4iQ&s",
  },
  {
    id: 2,
    name: "Chicken Sekuwa",
    description: "Grilled Nepali-style chicken with herbs",
    image:
      "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/86/98/4/BPusHQbQ5uOQ0LoXbm7B_Chicken%20Sekuwa.jpg",
  },
  {
    id: 3,
    name: "Newari Khaja Set",
    description: "Traditional Newari feast with beaten rice",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/72/ae/2c/newari-khaja-set.jpg",
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
