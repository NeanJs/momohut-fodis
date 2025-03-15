"use client";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";

const images = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Dish 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Dish 2",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Dish 3",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Dish 4",
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Dish 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    alt: "Dish 6",
  },
];

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <BodyWrapper className="py-16 bg-momo_red text-center relative">
      <h2 className="text-3xl font-bold text-primary mb-8 text-white">
        Our Food Gallery
      </h2>
      <img
        src="gallerybg.png"
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="px-6">
        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.id} className="px-3 items-center flex flex-col">
              <div className="shadow-lg rounded-lg overflow-hidden group size-72 ">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white ">{img.alt}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </BodyWrapper>
  );
};

export default Gallery;
