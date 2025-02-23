import React from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const SpecialsSection = () => {
  const specials = [
    {
      image: "https://path/to/spicy-chicken.jpg",
      title: "Spicy Fried Chicken",
      description: "Delicious spicy chicken with fries.",
      offer: "On This Week",
      buttonText: "Order Now",
    },
    {
      image: "https://path/to/special-food.jpg",
      title: "Today Special Food",
      description: "Freshly made special food just for today!",
      offer: "Welcome Foods",
      buttonText: "Order Now",
    },
    {
      image: "https://path/to/special-roll.jpg",
      title: "Special Chicken Roll",
      description: "Crispy chicken roll, a treat for your tastebuds!",
      offer: "On This Week",
      buttonText: "Order Now",
    },
  ];

  return (
    <BodyWrapper className="py-16 bg-gray-100">
      <ContentWrapper className="container mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8">Special Offers</h2>
        <div className="flex w-full justify-between gap-8">
          {specials.map((special, index) => (
            <SpecialCard
              key={index}
              image={special.image}
              title={special.title}
              description={special.description}
              offer={special.offer}
              buttonText={special.buttonText}
            />
          ))}
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default SpecialsSection;

interface SpecialCardProps {
  image: string;
  title: string;
  description: string;
  offer: string;
  buttonText: string;
}

const SpecialCard = ({
  image,
  title,
  description,
  offer,
  buttonText,
}: SpecialCardProps) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg w-96 flex flex-col items-center p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{offer}</p>
      <p className="text-gray-300 text-center mt-2">{description}</p>
      <button className="bg-red-600 hover:bg-red-700 text-white mt-4 px-6 py-2 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
};
