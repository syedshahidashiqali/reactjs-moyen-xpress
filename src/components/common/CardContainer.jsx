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
import { useQuery } from "react-query";
import { Images_API } from "../../apiRoutes";

export default function CardContainer({ name, apiRoute }) {
  const { width } = useWindowSize();

  const fetchProducts = async () => {
    const res = await (await fetch(apiRoute)).json();
    return res[0].slice(0, 10);
  };

  const { status, data } = useQuery(
    name === "Deals Of The Day" ? "dealsOfTheDay" : "newArrivals",
    fetchProducts
  );

  // console.log(apiRoute);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await (await fetch(apiRoute)).json();
  //     setData(res[0].slice(0, 10));
  //   };
  //   getData();
  // }, []);
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
                      <Link to={`product/${product?.id}`}>
                        <ContainerCard data={product} />
                      </Link>
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
      {data.discounted_percentage && (
        <span className="cardDiscount">{data?.discounted_percentage}% off</span>
      )}
      <span className="cardTag">best</span>
      <span className="cardFvt">
        <i className="fa-regular fa-heart" />
      </span>
      <Card.Body className="cardBody">
        <Card.Title>{name.slice(0, 12)}</Card.Title>
        <Card.Text className="d-flex fd-c">
          <span className="discAndActPrice">
            <del>${price}</del> <span>${discounted_price}.00</span>
          </span>
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
