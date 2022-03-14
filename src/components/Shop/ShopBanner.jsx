import "./ShopBanner.css";
import { Button } from "react-bootstrap";
import bannerImg from "../../images/shopPageBanner.jpg";

export default function ShopBanner() {
  return (
    <div className="col-md-12">
      <div
        className="shopInnerBanner"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundColor: "#FFC74E",
          padding: "5% 6%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <div className="shopInnerBannerText">
              <h4>accessories collection</h4>
              <h3>smart wrist watches</h3>
              <Button className="shopMainDiscBtn">
                discover now
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ marginLeft: "0.5rem" }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
