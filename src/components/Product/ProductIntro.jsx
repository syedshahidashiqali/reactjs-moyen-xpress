import { useState } from "react";
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
import { Breadcrumb, Form, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
// dummy data
import { dummyData } from "../../dummyData";

export default function ProductIntro() {
  const [rating, setRating] = useState(0);
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row mb-3">
              <div className="col-6">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={90}
                  totalSlides={4}
                  visibleSlides={1}
                  className="prodcarouselProvider"
                >
                  <Slider className="prodcarouselSlider">
                    {dummyData.map((image, index) => {
                      return (
                        <Slide
                          index={index}
                          key={index}
                          className="prodcarouselSlide"
                        >
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
              <div className="col-6">
                <div className="prodIntroMid">
                  <h2>electronics black wrist watch</h2>
                  <div className="prodIntroMidTop my-3">
                    <Breadcrumb>
                      <span className="me-2 bold">Category:</span>
                      <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
                      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Computer
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Monitor</Breadcrumb.Item>
                    </Breadcrumb>
                    <span>
                      <span className="bold">Stock: </span> 2
                    </span>
                    <span className="mt-3">
                      <span className="bold">SKU: </span> MS46891340
                    </span>
                  </div>
                  <div className="prodIntroMidMid">
                    <h2>$99.00</h2>
                    <div className="prodIntroRating d-flex ai-c">
                      <Rating
                        ratingValue={rating}
                        size={20}
                        allowHalfIcon={true}
                      />
                      <span>(0 reviews)</span>
                    </div>
                  </div>
                  <div className="prodIntroMidBot mt-4">
                    <div className="prodIntroAttr prodIntroSizeAtt">
                      <label htmlFor="">Size:</label>
                      <Form.Select
                        aria-label="Default select example"
                        className="prodIntroForm"
                      >
                        <option>Please Select Attribute</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="32">32</option>
                      </Form.Select>
                    </div>
                    <div className="prodIntroAttr prodIntroColorAtt mt-4">
                      <label htmlFor="">Color:</label>
                      <Form.Select
                        aria-label="Default select example"
                        className="prodIntroForm"
                      >
                        <option>Please Select Attribute</option>
                        <option value="Gray">Gray</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="prodIntroMidLast mt-4 d-flex ai-c">
                    <a href="">
                      <i className="fa-regular fa-heart me-3" />
                    </a>
                    <Button variant="primary" size="lg">
                      <i
                        className="fa-solid fa-cart-shopping"
                        style={{ marginRight: "0.5rem" }}
                      />
                      add to cart
                    </Button>
                  </div>
                </div>
              </div>
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
