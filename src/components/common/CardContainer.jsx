import "./CardContainer.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Card, Placeholder, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Images_API, ADDTOWISHLIST } from "../../apiRoutes";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

export default function CardContainer({ name, apiRoute }) {
  const { width } = useWindowSize();

  const fetchProducts = async () => {
    const res = await (await fetch(apiRoute)).json();
    return res[0];
  };

  const { status, data, error, refetch } = useQuery(
    name === "Deals Of The Day" ? "dealsOfTheDay" : "newArrivals",
    fetchProducts
  );
  const { userData } = useSelector((state) => state.auth);

  // whenever user is logged out it refetches data
  useEffect(() => {
    refetch();
  }, [userData.username]);

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
                {status === "loading" &&
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <Slide index={index} key={index}>
                      <ContainerCardPlaceholder />
                    </Slide>
                  ))}
                {status === "error" && (
                  <Alert variant="danger" show={true}>
                    <Alert.Heading>Error while fetching data!</Alert.Heading>
                    <p>{error.message}</p>
                  </Alert>
                )}
                {status === "success" &&
                  data.map((product, index) => (
                    <Slide
                      index={index}
                      className="cardSlide  d-flex jc-c"
                      key={index}
                    >
                      <Link
                        to={`product/${product?.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ContainerCard data={product} refetch={refetch} />
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

export function ContainerCard({ data, refetch }) {
  const { width } = useWindowSize();

  const { discounted_price, price, name, images, id } = data;

  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  const { userData } = useSelector((state) => state.auth);

  const addToWishlistHandler = async (e) => {
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
      const res = await axios.get(`${ADDTOWISHLIST}/${id}/${userData.id}`);

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
        refetch();
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
        refetch();
      }
    }
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
      <span
        title="Add to wishlist"
        className="cardFvt"
        onClick={addToWishlistHandler}
      >
        <i
          className={`fa-${
            data.is_wishlisted === true ? "solid" : "regular"
          } fa-heart`}
        />
      </span>
      <span className="cardAddToCart" onClick={(e) => e.preventDefault()}>
        <i className="fa-solid fa-cart-shopping" />
      </span>
      <Card.Body className="cardBody">
        <Card.Title>{name.slice(0, 12)}</Card.Title>
        <Card.Text className="d-flex fd-c">
          <span className="discAndActPrice">
            <del>${price}</del> <span>${discounted_price}</span>
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

export const ContainerCardPlaceholder = () => {
  return (
    <Card className="cardContainerCard">
      <Placeholder as={"div"} animation="glow">
        <Placeholder xs={12} style={{ height: "14rem", width: "100%" }} />
      </Placeholder>
      <Card.Body className="text-center">
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={6} /> <Placeholder xs={10} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
