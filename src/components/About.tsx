import React from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";
import { GiKnifeFork } from "react-icons/gi";
import Button from "./global/Button";

const AboutUs = () => {
  return (
    <BodyWrapper className="flex items-center justify-between bg-white relative mt-40 min-h-[60vh]">
      <ContentWrapper className="flex flex-col space-y-4 ">
        <div className=" md:w-2/4 text-center leading-loose flex flex-col items-center">
          <div className="flex flex-row gap-2 font-extrabold text-md uppercase text-momo_red items-center">
            <GiKnifeFork />
            <span>About Us</span>
            <GiKnifeFork />
          </div>
          <h2 className="text-xl md:text-4xl font-extrabold text-primary leading-relaxed">
            Journey of Momohut - Variety of Falvours at One Place
          </h2>
          <p className="text-sm md:text-md text-gray-600 leading-snug">
            The legacy continues with the grand re-opening of BC’s first-ever
            Nepalese restaurant, Café Kathmandu, serving customers since 2006.
            Now, after a decade of operation, the establishment is rebranding
            itself as ‘Momo Hut,’ and remains committed to serving the finest
            Nepalese cuisine available for both dine-in and takeout. Momo Hut
            proudly welcomes everyone to experience the best of Nepalese cuisine
            at its Fraser Street location in Vancouver.
          </p>
          <Button text="Learn More" />
        </div>
      </ContentWrapper>

      <div className="img img-left left-0 rounded-tr-full rounded-br-full "></div>
      <div className="img img-right right-0 rounded-tl-full rounded-bl-full"></div>

      <img
        src="https://gramentheme.com/wp/fodis/wp-content/uploads/2024/12/aboutShape1_6.png"
        className="absolute right-24 animate-spin md:block hidden"
      />
      <img
        src="https://gramentheme.com/wp/fodis/wp-content/uploads/2024/12/aboutShape1_3.png"
        className="absolute left-24 animate-spin md:block
         hidden"
      />
    </BodyWrapper>
  );
};

export default AboutUs;
