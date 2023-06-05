import React, { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ photos }) => {
  const images = photos.posters;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="gallery-title">Posters</h2>
      <div
        className="selected-image"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w300/${selectedImage?.file_path}")`,
        }}
      />
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w300/${image.file_path}")`,
                }}
                key={image.file_path}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
