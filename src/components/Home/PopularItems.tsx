import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const popularItems = [
  { id: 1, name: "Chicken Momo", price: "$12.99", image: "/momo1.jpg" },
  { id: 2, name: "Veg Momo", price: "$10.99", image: "/momo2.jpg" },
  { id: 3, name: "Fried Momo", price: "$13.99", image: "/momo3.jpg" },
  { id: 4, name: "Jhol Momo", price: "$14.99", image: "/momo4.jpg" },
];

const PopularItems = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            Popular Food Items
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularItems.map((item) => (
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

export default PopularItems;
