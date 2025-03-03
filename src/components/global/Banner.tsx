import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import Button from "./Button";

interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  className,
}) => {
  return (
    <BodyWrapper
      className={`body-wrapper h-80 flex items-center justify-start text-left bg-cover bg-center relative ${className}`}
      background={`url(${backgroundImage})`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <ContentWrapper className="justify-start">
        <div className="items-start justify-start relative text-white w-full">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg mt-2 md:w-2/5">{subtitle}</p>
          <Button text="Order Now" />
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Banner;
