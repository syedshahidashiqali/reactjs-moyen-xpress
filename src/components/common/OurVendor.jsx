import "./OurVendor.css";
import vendorImg1 from "../../images/ourVendor1.jpg";
import vendorImg2 from "../../images/ourVendor2.jpg";
import vendorImg3 from "../../images/ourVendor3.jpg";
import vendorImg4 from "../../images/ourVendor4.png";
import vendorImg5 from "../../images/ourVendor5.png";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { useWindowSize } from "react-use";

export default function OurVendor() {
  const { width } = useWindowSize();

  return (
    <div className="ourVendor">
      <div className="container-fluid">
        <div className="row prodCardsRow1 mb-4">
          <div className="col prodCardsRow1Col1">
            <h1 className="prodCardsTitle">Our Vendors</h1>
          </div>
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={20}
          totalSlides={5}
          visibleSlides={
            width <= 575
              ? 2
              : width > 575 && width <= 770
              ? 3
              : width > 770 && width <= 1200
              ? 4
              : width > 1200 && 5
          }
          isPlaying={true}
          interval={3000}
          playDirection={"forward"}
          step={1}
          style={{
            border: "2px solid #eeeeee",
            borderRadius: "2%",
            margin: "2% 0% 2% 0%",
            padding: "2rem 0",
          }}
        >
          <Slider className="vendorRow2">
            <Slide index={0} style={{ height: "100%", padding: "0%" }}>
              <Vendor src={vendorImg1} alt={"vendor img 1"} />
            </Slide>
            <Slide index={1} style={{ height: "100%", padding: "0%" }}>
              <Vendor src={vendorImg2} alt={"vendor img 2"} />
            </Slide>
            <Slide index={2} style={{ height: "100%", padding: "0%" }}>
              <Vendor src={vendorImg3} alt={"vendor img 3"} />
            </Slide>
            <Slide index={3} style={{ height: "100%", padding: "0%" }}>
              <Vendor src={vendorImg4} alt={"vendor img 4"} />
            </Slide>
            <Slide index={4} style={{ height: "100%", padding: "0%" }}>
              <Vendor src={vendorImg5} alt={"vendor img 5"} />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}

function Vendor({ src, alt }) {
  return (
    <figure className="vendorBox d-flex ai-c jc-c mb-0">
      <Image src={src} alt={alt} />
    </figure>
  );
}
