import "./NotFoundMain.css";
import notFoundImg from "../../images/errorPageImage.png";
import { Button } from "react-bootstrap";

export default function NotFoundMain() {
  return (
    <div className="notFoundMainWrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="notFoundBannerWrapper">
              <figure>
                <img src={notFoundImg} alt="Not Found Image" />
              </figure>
              <div className="notFoundBannerText">
                <h2>Oops!!! Something Went Wrong Here</h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
