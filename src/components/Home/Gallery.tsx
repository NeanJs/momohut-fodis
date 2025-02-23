import React from "react";
import { BodyWrapper, ContentWrapper } from "../ui/Wrapper";

const galleryImages = [
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
  return (
    <BodyWrapper>
      <ContentWrapper>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-primary">Gallery</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Gallery;
