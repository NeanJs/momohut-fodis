import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import { MenuItem } from "../MenuItem";

const bestSellers = [
  {
    id: 1,
    name: "Steamed Momo",
    price: "$11.99",
    image:
      "https://www.thespruceeats.com/thmb/DXZoAJoKTPS7BKEyk4H-Gw3puhc%3D/6016x4016/filters%3Afill%28auto%2C1%29/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
  },
  {
    id: 2,
    name: "Chow Mein",
    price: "$9.99",
    image:
      "https://laurenslatest.com/wp-content/uploads/2021/04/chow-mein-12-scaled.jpg",
  },
  {
    id: 3,
    name: "Sukuti Sadeko",
    price: "$14.99",
    image:
      "https://www.gfcookingclub.com/wp-content/uploads/2012/11/421112_451516754887209_470028067_n.jpg",
  },
  {
    id: 4,
    name: "Thakali Set",
    price: "$16.99",
    image:
      "https://wilson.com.np/wp-content/uploads/2021/06/Thakali-Khana-Set-taste-of-nepal-foods.png",
  },
];

const BestSellers = () => {
  return (
    <BodyWrapper backgroundColor="#F3F1EA">
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
