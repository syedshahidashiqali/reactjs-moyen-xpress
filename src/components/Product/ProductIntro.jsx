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
import { Breadcrumb, Form, Button, Card, Tabs, Tab } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import discountImg from "../../images/prodDiscountbanner.jpg";
// dummy data
import { dummyData } from "../../dummyData";

export default function ProductIntro() {
  const [rating, setRating] = useState(0);
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="row mb-4">
              <div className="col-md-6 col-sm-6 col-xs-12">
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
                      <i className="fa-solid fa-angle-left" />
                    </ButtonBack>
                    <ButtonNext>
                      <i className="fa-solid fa-angle-right" />
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
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
            <div className="row mb-4">
              <div className="col-md-12">
                <ProductTabs />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="prodIntroIconsContainer">
              <IconBox
                textHeading={"Free Shipping & Returns"}
                textPara={"For all orders over $99"}
                icon={"fa-solid fa-truck"}
              />
              <hr />
              <IconBox
                textHeading={"Secure Payment"}
                textPara={"We ensure secure payment"}
                icon={"fa-solid fa-briefcase"}
              />
              <hr />
              <IconBox
                textHeading={"Money Back Guarantee"}
                textPara={"Any back within 30 days"}
                icon={"fa-solid fa-hand-holding-dollar"}
              />
            </div>
            <div className="prodIntroBannerContainer">
              <figure>
                <img src={discountImg} alt="discount banner" />
              </figure>
              <div className="prodIntroBannerPriceInfo">
                40<sup>%</sup>
                <sub>OFF</sub>
                <h4>ultimate sale</h4>
              </div>
            </div>
            <div className="prodIntroSliderContainer">
              <div className="prodIntroTitle">
                <h4>More Products</h4>
              </div>
              <div className="prodIntroCarousel">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={60}
                  totalSlides={3}
                  visibleSlides={1}
                >
                  <Slider>
                    <Slide index={0}>
                      <SliderCard />
                    </Slide>
                    <Slide index={1}>
                      <SliderCard />
                    </Slide>
                    <Slide index={2}>
                      <SliderCard />
                    </Slide>
                  </Slider>
                  <div className="prodIntroSmallBtnContainer">
                    <ButtonBack>
                      <i className="fa-solid fa-angle-left" />
                    </ButtonBack>
                    <ButtonNext>
                      <i className="fa-solid fa-angle-right" />
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
            </div>
          </div>
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

function IconBox({ textHeading, textPara, icon }) {
  return (
    <div className="prodIntroIconsBox d-flex ai-c">
      <div className="prodIntroIconsBoxIcon ">
        <i className={icon} />
      </div>
      <div className="prodIntroIconsBoxText ">
        <h4>{textHeading}</h4>
        <p>{textPara}</p>
      </div>
    </div>
  );
}

function SliderCard() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <Card className="prodIntroCardContainerCard">
      <Card.Img
        className="cardImage"
        variant="top"
        src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&w=1000&q=80"
      />
      <span className="cardDiscount">50% off</span>
      <span className="cardTag">best</span>
      <span className="cardFvt">
        <i className="fa-regular fa-heart" />
      </span>
      <Card.Body className="cardBody">
        <Card.Title>Shoes</Card.Title>
        <Card.Text>
          <del>$349.00</del> <span>$340.00</span>
          <Rating ratingValue={rating} size={20} allowHalfIcon={true} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function ProductTabs() {
  const [key, setKey] = useState("description");
  const [rating, setRating] = useState(3);
  return (
    <div className="productIntroTabs">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4 ">
        <Tab eventKey="description" title="Description">
          <div className="row">
            <div className="col-md-12">
              <div className="prodDescContainer">
                <h4>Detail</h4>
                <p>
                  Incredible games & non-stop entertainment. The PS4 console,
                  delivering awesome gaming power, incredible entertainment and
                  vibrant HDR technology
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="prodDescBotContainer">
                <h6>
                  <span className="pe-2">1.</span>Free Shipping & Return
                </h6>
                <p className="ps-4">
                  We offer free shipping for products on orders above 50$ and
                  offer free delivery for all orders in US.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="prodDescBotContainer">
                <h6>
                  <span className="pe-2">2.</span>Free and Easy Returns
                </h6>
                <p className="ps-4">
                  We guarantee our products and you could get back all of your
                  money anytime you want in 30 days.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="prodDescBotContainer">
                <h6>
                  <span className="pe-2">3.</span>Special Financing
                </h6>
                <p className="ps-4">
                  Get 20%-50% off items over 50$ for a month or over 250$ for a
                  year with our special credit card.
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="vendorInfo" title="Vendor Info">
          <div className="row">
            <div className="col-md-12">
              <div className="prodVendContainer">
                <h4>Vendor</h4>
                <div className="d-flex ai-c vendorRatingSec">
                  <Rating ratingValue={rating} size={20} allowHalfIcon={true} />
                  <span className="ms-2">(1 Reviews)</span>
                </div>
                <div className="prodVendInfo mt-4">
                  <p>
                    <span className="prodVendName">store name:</span>
                    <span>my vendor shop</span>
                  </p>
                  <p>
                    <span className="prodVendName">address:</span>
                    <span>vendor's point vendor's point</span>
                  </p>
                  <p>
                    <span className="prodVendName">Phone:</span>
                    <span>22</span>
                  </p>
                  <h6 className="mt-4">
                    <a href="">
                      visit store
                      <i
                        className="fa-solid fa-arrow-right-long"
                        style={{ marginLeft: "0.5rem" }}
                      />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="customerReviews" title="Customer Reviews (5)">
          <div className="row">
            <div className="col-md-4">
              <div className="prodReviewContainer">
                <div className="prodAvgReviewWrapper d-flex jc-sa">
                  <h4>3.0</h4>
                  <div className="prodAvgRating">
                    <p>Average Rating</p>
                    <span className="d-flex ai-c custRevRatTop">
                      <Rating
                        ratingValue={rating}
                        size={18}
                        allowHalfIcon={true}
                      />
                      <span className="ms-2">(1 Reviews)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">col of size 8</div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
