import "./IntroSlider.css";
import sliderBgImg from "../../images/introSliderBg.jpg";
import sliderImg1 from "../../images/introSliderImg1.png";
import sliderImg2 from "../../images/introSliderImg2.png";
import sliderImg3 from "../../images/introSliderImg3.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot,
} from "pure-react-carousel";
import { Button } from "react-bootstrap";

export default function IntroSlider() {
  return (
    <div
      className="introSlider"
      style={{
        backgroundImage: `url(${sliderBgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={3}
              hasMasterSpinner={true}
            >
              <Slider>
                <Slide
                  index={0}
                  classNameHidden={`visibility-h`}
                  classNameVisible={`animate__animated animate__zoomIn introSliderZoomInCus animate__delay-2s
                  `}
                >
                  <div className="row row1">
                    <LeftCarouselItem />
                    <div className="col-6">
                      <Image
                        src={sliderImg1}
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                </Slide>
                <Slide
                  index={1}
                  classNameHidden={`visibility-h`}
                  classNameVisible={`animate__animated animate__zoomIn introSliderZoomInCus animate__delay-2s
                  `}
                >
                  <div className="row row2">
                    <LeftCarouselItem />
                    <div className="col-6">
                      <Image
                        src={sliderImg2}
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                </Slide>
                <Slide
                  index={2}
                  classNameHidden={`visibility-h`}
                  classNameVisible={`animate__animated animate__zoomIn introSliderZoomInCus animate__delay-2s
                  `}
                >
                  <div className="row row3">
                    <LeftCarouselItem />
                    <div className="col-6">
                      <Image
                        src={sliderImg3}
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="introDotsContainer">
                <Dot slide={0} />
                <Dot slide={1} />
                <Dot slide={2} />
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCarouselItem() {
  return (
    <div className="col-6 d-flex fd-c jc-c ai-s introSliderTextCol">
      <h3>welcome to</h3>
      <h1>
        moyen <span>xpress</span>
      </h1>
      <h4>reconnect africa to the world web shopping center</h4>
      <Button variant="primary" size="lg">
        shop now
        <i
          className="fa-solid fa-arrow-right-long"
          style={{ marginLeft: "0.5rem" }}
        />
      </Button>
    </div>
  );
}
