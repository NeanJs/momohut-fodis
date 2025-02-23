import { style } from "framer-motion/client";
import React from "react";

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
}
interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BodyWrapper: React.FC<BodyWrapperProps> = ({
  children,
  className,
  background,
}) => {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-full bg-cover bg-no-repeat overflow-hidden py-20 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-[80%] h-full items-center justify-center mx-auto flex flex-wrap ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

const FlexibleWrapper: React.FC<ContentWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-full h-full items-center justify-center mx-auto flex flex-wrap ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
export { BodyWrapper, ContentWrapper, FlexibleWrapper };
