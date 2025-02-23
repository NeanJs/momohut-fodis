import React from "react";
import { BodyWrapper, ContentWrapper, FlexibleWrapper } from "./ui/Wrapper";
import { Content } from "next/font/google";

const Newsletter = () => {
  return (
    <BodyWrapper
      className="bg-gray-200 h-[300px] flex flex-col justify-center"
      background="https://images.unsplash.com/photo-1711014489632-0df21f53a499?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <ContentWrapper className="min-h-fit">
        <div className="container mx-auto text-center flex justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-2 items-start w-full">
            <h2 className="text-3xl font-semibold text-white">
              Stay Informed About Special Offers
            </h2>
            <p className="text-md text-white">
              Sign up for our newsletter and get the latest news and offers!
            </p>
          </div>
          <div className="search-section flex items-center justify-end w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="p-4 w-1/2 border-gray-300 focus:border-red-600 focus:ring focus:ring-red-500"
            />
            <button className="bg-momo_red text-white px-8 p-4 hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Newsletter;
