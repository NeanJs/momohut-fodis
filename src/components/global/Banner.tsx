import React from "react";
import { BodyWrapper } from "../ui/Wrapper";

interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <BodyWrapper
      className="body-wrapper h-[300px] flex items-center justify-center text-center bg-cover bg-center relative"
      background={backgroundImage}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="content-wrapper relative text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </BodyWrapper>
  );
};

export default Banner;
