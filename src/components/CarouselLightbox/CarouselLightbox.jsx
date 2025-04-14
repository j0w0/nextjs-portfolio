import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Inline, Slideshow } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

export default function CarouselLightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const toggleOpen = (state) => () => {
    setOpen(state);
    setAutoplay(!state);
  };

  const updateImageIndex = ({ index: current }) => {
    if (autoplay) {
      setImageIndex(current);
    }
  };

  const updateImageIndexLightbox = ({ index: current }) => {
    setImageIndex(current);
  };

  const slides = images.map(({ node }, index) => {
    const { altText, mediaDetails, mediaItemUrl } = node;
    const { sizes } = mediaDetails;
    const img = sizes.find((image) => image.name === "md");

    return {
      src: img.sourceUrl,
      description: altText,
      width: img.width,
      height: img.height,
    };
  });

  return (
    <div>
      <Lightbox
        index={imageIndex}
        slides={slides}
        plugins={[Inline, Slideshow]}
        on={{
          view: updateImageIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            aspectRatio: "16 / 9",
            margin: "0 auto",
          },
        }}
        slideshow={{ autoplay, delay: 5000 }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={imageIndex}
        slides={slides}
        on={{ view: updateImageIndexLightbox }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        slideshow={{ autoplay, delay: 5000 }}
      />
    </div>
  );
}
