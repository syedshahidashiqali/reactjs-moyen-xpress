import { useEffect, useState } from "react";
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
import {
  Breadcrumb,
  Form,
  Button,
  Card,
  Tabs,
  Tab,
  ProgressBar,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import discountImg from "../../images/prodDiscountbanner.jpg";
import { useWindowSize } from "react-use";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  GETPRODUCTBYID,
  Images_API,
  ADDTOCART,
  ADDTOWISHLIST,
  WISHLISTDATA,
} from "../../apiRoutes";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

export default function ProductIntro() {
  const [rating, setRating] = useState(0);
  const { width } = useWindowSize();
  const { productId } = useParams();

  const fetchProduct = async () => {
    const res = await (await fetch(`${GETPRODUCTBYID}/${productId}`)).json();
    return res[0];
  };

  const { status, data } = useQuery("product", fetchProduct);

  const { userData } = useSelector((state) => state.auth);

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [isFvt, setIsFvt] = useState(false);

  const addToCartHandler = async (e) => {
    e.preventDefault();
    if (userData.username === undefined) {
      toast.error("Please login first", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const res = await axios.post(ADDTOCART, {
        product_id: productId,
        user_id: userData.id,
        attribute: [color, size],
      });

      if (res.data[0].message === "Successfully added to cart") {
        toast.success("Successfully added to cart.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const fetchWishlistData = async () => {
    const res = await (await fetch(`${WISHLISTDATA}/${userData.id}`)).json();
    return res[0];
  };

  const {
    status: wishlistStatus,
    data: wishlistData,
    refetch,
  } = useQuery("wishlist", fetchWishlistData);

  useEffect(() => {
    wishlistData !== undefined &&
      wishlistData.forEach((wishlist) => {
        if (wishlist.product_id == productId) {
          setIsFvt(true);
        } else {
          setIsFvt(false);
        }
      });
  }, [wishlistData]);

  const addToWishlistHandler = async (e) => {
    e.preventDefault();
    refetch();
    if (userData.username === undefined) {
      toast.error("Please login first", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const res = await axios.get(
        `${ADDTOWISHLIST}/${productId}/${userData.id}`
      );

      if (res.data[0].message === "Added to wishlist") {
        toast.success("Successfully added to wishlist.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (
        res.data[0].message === "This item has been removed from your wishlist"
      ) {
        toast.warning("This item is removed from your wishlist", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  return (
    <div className="productSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="row mb-4">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={90}
                  totalSlides={data?.images.length}
                  visibleSlides={1}
                  className="prodcarouselProvider"
                >
                  <Slider className="prodcarouselSlider">
                    {data?.images.map((image, index) => {
                      return (
                        <Slide
                          index={index}
                          key={index}
                          className="prodcarouselSlide"
                        >
                          <ProductCarouselItem image={image?.name} />
                        </Slide>
                      );
                    })}
                  </Slider>
                  <div className="productIntroDotsContainer">
                    {data?.images.map((image, index) => {
                      return (
                        <Dot slide={index} key={index}>
                          <Image
                            src={`${Images_API}${image?.name}`}
                            className="prodDotImg"
                          />
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
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="prodIntroMid">
                  <h2>{data?.name}</h2>
                  <div className="prodIntroMidTop my-3">
                    <Breadcrumb>
                      <span className="me-2 bold">Category:</span>
                      <Breadcrumb.Item href="#">
                        {data?.getchildcategory?.sub_category?.name}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item href="#">
                        {data?.getchildcategory?.sub_category?.name}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                        {data?.getchildcategory?.name}
                      </Breadcrumb.Item>
                    </Breadcrumb>
                    <span>
                      <span className="bold">Stock: </span> {data?.stock}
                    </span>
                    <span className="mt-3">
                      <span className="bold">SKU: </span> {data?.sku}
                    </span>
                  </div>
                  <div className="prodIntroMidMid">
                    <h2>
                      <del className="me-2">${data?.price}</del>$
                      {data?.discounted_price}
                    </h2>
                    <div className="prodIntroRating d-flex ai-c">
                      <Rating
                        ratingValue={rating}
                        size={20}
                        allowHalfIcon={true}
                      />
                      <span>({data?.review_total})</span>
                    </div>
                  </div>
                  <Form onSubmit={addToCartHandler}>
                    <div className="prodIntroMidBot mt-4">
                      <div className="prodIntroAttr prodIntroSizeAtt">
                        <label htmlFor="">
                          {data?.get_attribute_values[0]?.attribute?.name}:
                        </label>
                        <Form.Select
                          className="prodIntroForm"
                          required
                          defaultValue={""}
                          onChange={(e) => {
                            setColor(e.target.value);
                          }}
                        >
                          <option value="" hidden disabled>
                            Please Select Attribute
                          </option>
                          {data?.get_attribute_values[0]?.value.map(
                            (attribute, index) => (
                              <option value={attribute} key={index}>
                                {attribute}
                              </option>
                            )
                          )}
                        </Form.Select>
                      </div>
                      <div className="prodIntroAttr prodIntroColorAtt mt-4">
                        <label htmlFor="">
                          {data?.get_attribute_values[1]?.attribute?.name}:
                        </label>
                        <Form.Select
                          className="prodIntroForm"
                          required
                          defaultValue={""}
                          onChange={(e) => {
                            setSize(e.target.value);
                          }}
                        >
                          <option value="" hidden disabled>
                            Please Select Attribute
                          </option>
                          {data?.get_attribute_values[1]?.value.map(
                            (attribute, index) => (
                              <option value={attribute} key={index}>
                                {attribute}
                              </option>
                            )
                          )}
                        </Form.Select>
                      </div>
                    </div>
                    {data?.stock > 0 && (
                      <div className="prodIntroMidLast mt-4 d-flex ai-c">
                        <a
                          onClick={addToWishlistHandler}
                          title="Add to wishlist"
                        >
                          {/* <i className="fa-solid fa-heart me-3" /> */}

                          {isFvt === true ? (
                            <i className="fa-solid fa-heart me-3" />
                          ) : (
                            <i className="fa-regular fa-heart me-3" />
                          )}
                        </a>
                        <Button variant="primary" size="lg" type="submit">
                          <i
                            className="fa-solid fa-cart-shopping"
                            style={{ marginRight: "0.5rem" }}
                          />
                          add to cart
                        </Button>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-12">
                <ProductTabs data={data} />
              </div>
            </div>
          </div>
          <div className="col-md-3 hideOnSmall">
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
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

function ProductCarouselItem({ image }) {
  return (
    <div className="prodBox">
      <ImageWithZoom
        src={`${Images_API}${image}`}
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

function ProductTabs({ data }) {
  const [key, setKey] = useState("description");
  const [rating, setRating] = useState(3);
  return (
    <div className="productIntroTabs">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4">
        <Tab eventKey="description" title="Description">
          <div className="row">
            <div className="col-md-12">
              <div className="prodDescContainer">
                <h4>Detail</h4>
                <p>{data?.description}</p>
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
                <h4>{data?.get_shop.get_vendor?.username}</h4>
                <div className="d-flex ai-c vendorRatingSec">
                  <Rating ratingValue={rating} size={20} allowHalfIcon={true} />
                  <span className="ms-2">(1 Reviews)</span>
                </div>
                <div className="prodVendInfo mt-4">
                  <p>
                    <span className="prodVendName">store name:</span>
                    <span>{data?.get_shop.name}</span>
                  </p>
                  <p>
                    <span className="prodVendName">address:</span>
                    <span>{data?.get_shop.get_vendor?.address_one}</span>
                  </p>
                  <p>
                    <span className="prodVendName">Phone:</span>
                    <span>{data?.get_shop.get_vendor?.phone_number}</span>
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
          <div className="prodIntroCusRevContainer">
            <div className="row">
              <div className="col-md-4 col-sm-8 col-xs-8">
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="avgRat">
                      <h4>3.0</h4>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="prodAvgRating">
                      <span>Average Rating</span>
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
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="cusRevProdRating">
                      <Rating ratingValue={1} size={18} allowHalfIcon={true} />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="cusRevProdRatingProgress">
                      <ProgressBar now={20} label={`${20}%`} />
                    </div>
                  </div>
                </div>
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="cusRevProdRating">
                      <Rating ratingValue={2} size={18} allowHalfIcon={true} />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="cusRevProdRatingProgress">
                      <ProgressBar now={40} label={`${40}%`} />
                    </div>
                  </div>
                </div>
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="cusRevProdRating">
                      <Rating ratingValue={3} size={18} allowHalfIcon={true} />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="cusRevProdRatingProgress">
                      <ProgressBar now={60} label={`${60}%`} />
                    </div>
                  </div>
                </div>
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="cusRevProdRating">
                      <Rating ratingValue={4} size={18} allowHalfIcon={true} />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="cusRevProdRatingProgress">
                      <ProgressBar now={80} label={`${80}%`} />
                    </div>
                  </div>
                </div>
                <div className="row d-flex ai-c">
                  <div className="col-md-4 col-sm-4 col-4">
                    <div className="cusRevProdRating">
                      <Rating ratingValue={5} size={18} allowHalfIcon={true} />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-8">
                    <div className="cusRevProdRatingProgress">
                      <ProgressBar now={100} label={`${100}%`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-12">
                <div className="cusReviewLastText">
                  <h4>submit your review</h4>
                  <p>Your email address will not be published.</p>
                </div>
                <Form>
                  <Form.Group className="mb-5">
                    <Form.Label>Your Rating Of This Product :</Form.Label>
                    <Form.Select>
                      <option>Rate...</option>
                      <option value="1">Perfect</option>
                      <option value="2">Good</option>
                      <option value="3">Average</option>
                      <option value="3">Not that bad</option>
                      <option value="3">Very poor</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Your Reviews Here..."
                    />
                  </Form.Group>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>
                    </div>
                  </div>
                  <Button variant="primary" type="submit">
                    Submit Review
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
