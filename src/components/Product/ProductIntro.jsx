import "./ProductIntro.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  Image,
  Dot,
} from "pure-react-carousel";

// dummy data
import { dummyData } from "../../dummyData";

export default function ProductIntro() {
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={110}
                  totalSlides={4}
                  visibleSlides={1}
                  className="prodcarouselProvider"
                >
                  <Slider className="prodcarouselSlider">
                    {dummyData.map((image, index) => {
                      return (
                        <Slide index={index} className="prodcarouselSlide">
                          <ProductCarouselItem image={image} />
                        </Slide>
                      );
                    })}
                  </Slider>
                  <div className="productIntroDotsContainer">
                    {dummyData.map((image, index) => {
                      return (
                        <Dot slide={index} key={index}>
                          <Image src={image} className="prodDotImg" />
                        </Dot>
                      );
                    })}
                  </div>
                  <div className="prodIntroButtonsContainer">
                    <ButtonBack>
                      {/* <i className="fa-solid fa-circle-chevron-left" /> */}
                      <i className="fa-solid fa-angle-left" />
                    </ButtonBack>
                    <ButtonNext>
                      {/* <i className="fa-solid fa-circle-chevron-right" /> */}
                      <i className="fa-solid fa-angle-right" />
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

function ProductCarouselItem({ image }) {
  return (
    <div className="prodBox">
      <ImageWithZoom
        src={image}
        bgImageTag="img"
        className="prodIntroZoomedImg"
      />
    </div>
  );
}

function ProductCarouselItemSub({ image }) {
  return (
    <div className="prodBoxSub">
      <Image src={image} className="prodIntroImgSub" />
    </div>
  );
}
