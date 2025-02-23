import React from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";
import { GiKnifeFork } from "react-icons/gi";

const AboutUs = () => {
  return (
    <BodyWrapper className="flex items-center justify-between h-[60vh] bg-white relative">
      <ContentWrapper className="flex flex-col space-y-4">
        <div className="w-2/4 text-center">
          <div className="flex items-center gap-2 justify-center text-momo_red font-semibold">
            <GiKnifeFork />
            <span>About Us</span>
            <GiKnifeFork />
          </div>
          <h2 className="text-3xl font-bold text-primary">
            Journey of Momohut
          </h2>
          <p className="text-lg text-gray-600">
            The legacy continues with the grand re-opening of BC’s first-ever
            Nepalese restaurant, Café Kathmandu, serving customers since 2006.
            Now, after a decade of operation, the establishment is rebranding
            itself as ‘Momo Hut,’ and remains committed to serving the finest
            Nepalese cuisine available for both dine-in and takeout. Momo Hut
            proudly welcomes everyone to experience the best of Nepalese cuisine
            at its Fraser Street location in Vancouver.
          </p>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md mt-4 hover:bg-red-600">
            Learn More
          </button>
        </div>
      </ContentWrapper>

      <div className="img left-0 rounded-tr-full rounded-br-full justify-end">
        <img src="bowl.png" />
      </div>
      <div className="img right-0 rounded-tl-full rounded-bl-full justify-start">
        <img src="bowl.png" />
      </div>
    </BodyWrapper>
  );
};

export default AboutUs;
