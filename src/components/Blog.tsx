import React from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const Blog = () => {
  return (
    <BodyWrapper className="bg-gray-100 py-20">
      <ContentWrapper className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6  shadow-lg">
            <img
              src="https://thejosie.com/wp-content/uploads/2019/12/Dinner-horz-1024x768.jpg"
              alt="Blog Post"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              New Dishes Coming Soon!
            </h3>
            <p className="text-gray-600">
              We are adding exciting new dishes to our menu this season...
            </p>
            <button className="mt-4 bg-momo_red text-white px-4 py-2  hover:bg-red-700">
              Read More
            </button>
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Blog;
