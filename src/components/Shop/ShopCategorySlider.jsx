import "./ShopCategorySlider.css";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import sliderImg1 from "../../images/shopPageSlider2Img1.jpg";
import sliderImg2 from "../../images/shopPageSlider2Img2.jpg";
import sliderImg3 from "../../images/shopPageSlider2Img3.jpg";
import sliderImg4 from "../../images/shopPageSlider2Img4.jpg";
import sliderImg5 from "../../images/shopPageSlider2Img5.jpg";
import sliderImg6 from "../../images/shopPageSlider2Img6.jpg";
import sliderImg7 from "../../images/shopPageSlider2Img7.jpg";
import sliderImg8 from "../../images/shopPageSlider2Img8.jpg";
import { useWindowSize } from "react-use";
import { useState } from "react";

export default function ShopCategorySlider() {
  const [sliderData, setSliderData] = useState([
    {
      name: "sports",
      image: sliderImg1,
    },
    {
      name: "babies",
      image: sliderImg2,
    },
    {
      name: "sneakers",
      image: sliderImg3,
    },
    {
      name: "cameras",
      image: sliderImg4,
    },
    {
      name: "games",
      image: sliderImg5,
    },
    {
      name: "kitchen",
      image: sliderImg6,
    },
    {
      name: "watches",
      image: sliderImg7,
    },
    {
      name: "clothes",
      image: sliderImg8,
    },
  ]);

  const { width } = useWindowSize();

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={sliderData.length}
      visibleSlides={
        width <= 335
          ? 2
          : width > 335 && width <= 510
          ? 3
          : width > 510 && width <= 625
          ? 4
          : width > 625 && width <= 770
          ? 5
          : width > 770 && width <= 1000
          ? 6
          : width > 1000 && 8
      }
      hasMasterSpinner={true}
      isPlaying={true}
      playDirection={"forward"}
      interval={3000}
      infinite={true}
    >
      <Slider>
        {sliderData.map((item, index) => {
          return (
            <Slide index={index} key={index}>
              <figure className="shopCategorySliderImgWrapper d-flex fd-c ai-c">
                <Image src={item?.image} alt="shop category image" />
                <span>{item?.name}</span>
              </figure>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}
