import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";
import Banner from "../global/Banner";

const DiscountBanner = () => {
  return (
    <Banner
      backgroundImage="https://img.freepik.com/premium-vector/abstract-red-background-promotion-banner_682335-285.jpg"
      title={"Get 20% Off on Your First Order!"}
      subtitle={
        " Limited-time offer for new customers. Order now and enjoy authentic Indo-Nepalese cuisine at a discounted price."
      }
    />
  );
};

export default DiscountBanner;
