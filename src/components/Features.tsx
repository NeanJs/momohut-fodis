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
    <BodyWrapper className="bg-momo_bg">
      <ContentWrapper className="flex-col">
        <h2 className="text-3xl font-semibold mb-8">Special Offers</h2>
        <div className="flex md:flex-row flex-wrap flex-col justify-between gap-8 w-full h-full">
          {specials.map((special, index) => (
            <SpecialCard
              key={index}
              image={
                "https://img.freepik.com/free-photo/black-board-textures_1203-2629.jpg"
              }
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
    <div className="bg-black overflow-hidden text-whiteshadow-lg lg:w-1/3 flex flex-1 flex-row items-center p-4 justify-center h-64 relative w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full absolute object-cover z-[1] inset-0 opacity-50
        "
      />
      <div className="text-content flex flex-col items-start z-10">
        <span className="font-semibold text-md text-momo_red">{offer}</span>
        <h3 className="text-2xl uppercase font-extrabold text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
        <button className="bg-red-600 hover:bg-red-700 text-white mt-4 px-8 py-4 font-semibold uppercase">
          {buttonText}
        </button>
      </div>
      <img
        className="floating-image flex-1 w-1/4 h-fit z-10"
        src="https://pngfile.net/public/uploads/preview/burger-png-image-117034393760cqkc5zh3r.png"
      ></img>
    </div>
  );
};
