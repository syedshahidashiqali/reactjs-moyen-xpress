import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  Image,
} from "pure-react-carousel";

export default function ProductIntro() {
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <CarouselProvider
                  naturalSlideWidth={400}
                  naturalSlideHeight={500}
                  totalSlides={3}
                  visibleSlides={1}
                  className="prodcarouselProvider"
                >
                  <Slider className="prodcarouselSlider">
                    <Slide index={0} className="prodcarouselSlide">
                      <ProductCarouselItem />
                    </Slide>
                    <Slide index={1} className="prodcarouselSlide">
                      <ProductCarouselItem />
                    </Slide>
                    <Slide index={2} className="prodcarouselSlide">
                      <ProductCarouselItem />
                    </Slide>
                  </Slider>
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
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

function ProductCarouselItem() {
  return (
    <div className="prodBox">
      <ImageWithZoom
        src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&w=1000&q=80"
        bgImageTag="img"
      />
    </div>
  );
}
