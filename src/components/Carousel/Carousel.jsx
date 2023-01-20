import Image from "next/image";
import { useEffect } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

export default function Carousel({ images }) {
  useEffect(() => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const controlArrows = document.querySelectorAll(".control-arrow");
    controlArrows.forEach((arrow) => sliderWrapper.appendChild(arrow));
  }, []);

  return (
    <ReactCarousel
      autoPlay
      dynamicHeight
      emulateTouch
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      {images.map((image, idx) => {
        const { databaseId, mediaItemUrl, mediaDetails, altText } = image.node;
        const { width, height, sourceUrl } = mediaDetails.sizes[0];

        return (
          <div key={databaseId}>
            <Image
              key={databaseId}
              src={sourceUrl}
              height={height}
              width={width}
              alt={altText}
            />
          </div>
        );
      })}
    </ReactCarousel>
  );
}
