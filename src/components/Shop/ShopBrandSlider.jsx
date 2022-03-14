import "./ShopBrandSlider.css";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import sliderImg1 from "../../images/shopPageSlider1Img1.png";
import sliderImg2 from "../../images/shopPageSlider1Img2.png";
import sliderImg3 from "../../images/shopPageSlider1Img3.png";
import sliderImg4 from "../../images/shopPageSlider1Img4.png";
import sliderImg5 from "../../images/shopPageSlider1Img5.png";
import sliderImg6 from "../../images/shopPageSlider1Img6.png";
import sliderImg7 from "../../images/shopPageSlider1Img7.png";
import { useWindowSize } from "react-use";

const images = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
];

export default function ShopBrandSlider() {
  const { width } = useWindowSize();
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={images.length}
      visibleSlides={
        width <= 400
          ? 2
          : width > 400 && width <= 575
          ? 3
          : width > 575 && width <= 770
          ? 5
          : width > 770 && width <= 1000
          ? 6
          : width > 1000 && 7
      }
      hasMasterSpinner={true}
      isPlaying={true}
      playDirection={"forward"}
      interval={3000}
      infinite={true}
    >
      <Slider>
        {images.map((image, index) => {
          return (
            <Slide index={index} image={image} key={index}>
              <figure className="shopBrandSliderImgWrapper">
                <Image src={image} alt="shop brand image" />
              </figure>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}
