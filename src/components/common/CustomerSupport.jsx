import "./CustomerSupport.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { useWindowSize } from "react-use";

export default function CustomerSupport() {
  const { width } = useWindowSize();
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={4}
      visibleSlides={
        width <= 575
          ? 1
          : width > 575 && width <= 770
          ? 2
          : width > 770 && width <= 1200
          ? 3
          : width > 1200 && 4
      }
      isPlaying={true}
      interval={3000}
      playDirection={"forward"}
      step={1}
      style={{
        border: "2px solid #eeeeee",
        borderRadius: "2%",
        margin: "2% 1% 2% 1%",
        padding: "2% 0",
      }}
    >
      <Slider>
        <Slide index={0}>
          <Box
            textHeading={"Free Shipping & Returns"}
            textPara={"For all orders over $99"}
            icon={"fa-solid fa-truck"}
          />
        </Slide>
        <Slide index={1}>
          <Box
            textHeading={"Secure Payment"}
            textPara={"We ensure secure payment"}
            icon={"fa-solid fa-briefcase"}
          />
        </Slide>
        <Slide index={2}>
          <Box
            textHeading={"Money Back Guarantee"}
            textPara={"Any back within 30 days"}
            icon={"fa-solid fa-hand-holding-dollar"}
          />
        </Slide>
        <Slide index={3}>
          <Box
            textHeading={"Customer Support"}
            textPara={"Call or email us 24 / 7"}
            icon={"fa-solid fa-comment-dots"}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

function Box({ textHeading, textPara, icon }) {
  return (
    <div className="box d-flex ai-c jc-c">
      <div className="iconBox">
        <i className={icon} />
      </div>
      <div className="textBox d-flex fd-c jc-c">
        <h4>{textHeading}</h4>
        <p>{textPara}</p>
      </div>
    </div>
  );
}
