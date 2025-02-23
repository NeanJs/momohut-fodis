import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";


const chefs = [
  { id: 1, name: "Rajiv Shrestha", role: "Head Chef", image: "/chef1.jpg" },
  { id: 2, name: "Leslie Bhattarai", role: "Sous Chef", image: "/chef2.jpg" },
  { id: 3, name: "Anwar Gurung", role: "Pastry Chef", image: "/chef3.jpg" },
];

const ChefTeam = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">
            Meet Our Expert Chefs
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold">{chef.name}</h3>
                <p className="text-lg text-gray-600">{chef.role}</p>
              </div>
            ))}
          </div>
        </section>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default ChefTeam;
