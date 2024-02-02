import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const HeroSectionCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="../src/assets/media/filmandserie/media0.webp"
            className="fotoCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../src/assets/media/filmandserie/media1.jpg"
            className="fotoCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../src/assets/media/filmandserie/media2.webp"
            className="fotoCarousel"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HeroSectionCarousel;
