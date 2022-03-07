import "./CardContainer.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useWindowSize } from "react-use";

export default function CardContainer(props) {
  const { width } = useWindowSize();
  const { name } = props;

  return (
    <>
      <div className="prodCards">
        <div className="container-fluid">
          <div className="row prodCardsRow1 mb-4">
            <div className="col prodCardsRow1Col1">
              <h1 className="prodCardsTitle">{name}</h1>
            </div>
            <div className="col d-flex jc-e prodCardsRow1Col2">
              <a href="" className="showMoreProdsLink d-flex ai-c">
                More Products
                <i className="fa-solid fa-arrow-right-long showMoreProdsLinkArrow " />
              </a>
            </div>
          </div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
            visibleSlides={
              width <= 910 && width > 730
                ? 4
                : width <= 730 && width > 555
                ? 3
                : width <= 555
                ? 2
                : 5
            }
          >
            <Slider>
              <div className="row">
                <Slide index={0} className="cardSlide  d-flex jc-c">
                  <ContainerCard />
                </Slide>
                <Slide index={1} className="cardSlide  d-flex jc-c">
                  <ContainerCard />
                </Slide>
                <Slide index={2} className="cardSlide  d-flex jc-c">
                  <ContainerCard />
                </Slide>
                <Slide index={3} className="cardSlide  d-flex jc-c">
                  <ContainerCard />
                </Slide>
                <Slide index={4} className="cardSlide  d-flex jc-c">
                  <ContainerCard />
                </Slide>
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

function ContainerCard() {
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
        src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&w=1000&q=80"
      />
      <span className="cardDiscount">50% off</span>
      <span className="cardTag">best</span>
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
