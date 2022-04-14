import "./NotFoundMain.scss";
import notFoundImg from "../../images/errorPageImage.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFoundMain() {
  return (
    <div className="notFoundMainWrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="notFoundBannerWrapper">
              <figure>
                <img
                  className="img-fluid"
                  src={notFoundImg}
                  alt="Not Found Image"
                />
              </figure>
              <div className="notFoundBannerText">
                <h2>
                  <span>Oops!!!</span> Something Went Wrong Here
                </h2>
                <p>
                  There may be a misspelling in the URL entered, or the page you
                  are looking for may no longer exist
                </p>
                <Link to="/">
                  <Button>
                    go back home
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
