import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const bestSellers = [
  { id: 1, name: "Steamed Momo", price: "$11.99", image: "/steamed-momo.jpg" },
  { id: 2, name: "Chow Mein", price: "$9.99", image: "/chowmein.jpg" },
  { id: 3, name: "Sukuti Sadeko", price: "$14.99", image: "/sukuti.jpg" },
  { id: 4, name: "Thakali Set", price: "$16.99", image: "/thakali-set.jpg" },
];

const BestSellers = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            Best Selling Dishes
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((item) => (
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

export default BestSellers;
