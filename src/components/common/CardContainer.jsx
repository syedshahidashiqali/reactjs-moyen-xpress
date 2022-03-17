import "./CardContainer.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Card, Spinner } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { useQuery, QueryClient } from "react-query";
import { Images_API } from "../../apiRoutes";

export default function CardContainer(props) {
  const { width } = useWindowSize();
  const { name, apiRoute } = props;

  const fetchProducts = async () => {
    const res = await (await fetch(apiRoute)).json();
    return res[0].slice(0, 10);
  };

  console.log(26, apiRoute);

  const { status, data } = useQuery("products", fetchProducts);
  return (
    <>
      <div className="prodCards">
        <div className="container-fluid">
          <div className="row prodCardsRow1 mb-4">
            <div className="col prodCardsRow1Col1">
              <h1 className="prodCardsTitle">{name}</h1>
            </div>
            <div className="col d-flex jc-e prodCardsRow1Col2">
              <Link to="/shop" className="showMoreProdsLink d-flex ai-c">
                More Products
                <i className="fa-solid fa-arrow-right-long showMoreProdsLinkArrow " />
              </Link>
            </div>
          </div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={width <= 380 ? 160 : 150}
            totalSlides={10}
            visibleSlides={
              width <= 920 && width > 742
                ? 4
                : width <= 742 && width > 562
                ? 3
                : width <= 562
                ? 2
                : 5
            }
          >
            <Slider>
              <div className="row">
                {status === "loading" && (
                  <div
                    className="d-flex jc-c ai-c"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <Spinner animation="border" />
                  </div>
                )}
                {status === "error" && <div>Error fetching data</div>}
                {status === "success" &&
                  data.map((product, index) => (
                    <Slide
                      index={index}
                      className="cardSlide  d-flex jc-c"
                      key={index}
                    >
                      <ContainerCard data={product} />
                    </Slide>
                  ))}
              </div>
            </Slider>
            <div className="carouselBtnContainer">
              <ButtonBack className="carouselBtn">
                <i className="fa-solid fa-circle-chevron-left" />
              </ButtonBack>
              <ButtonNext className="carouselBtn">
                <i className="fa-solid fa-circle-chevron-right" />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}

export function ContainerCard({ data }) {
  const { width } = useWindowSize();

  const { discounted_price, price, name, images } = data;

  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <Card className="cardContainerCard">
      <Card.Img
        className="cardImage"
        variant="top"
        src={`${Images_API}${images[0]?.name}`}
      />
      <span className="cardDiscount">50% off</span>
      <span className="cardTag">best</span>
      <span className="cardFvt">
        <i className="fa-regular fa-heart" />
      </span>
      <Card.Body className="cardBody">
        <Card.Title>{name.slice(0, 12)}</Card.Title>
        <Card.Text>
          <div className="discAndActPrice">
            <del>${price}</del> <span>${discounted_price}.00</span>
          </div>
          <Rating
            ratingValue={rating}
            size={width <= 335 ? 15 : 20}
            allowHalfIcon={true}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
