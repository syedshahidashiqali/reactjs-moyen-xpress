import "./WishlistMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";

export default function WishlistMain() {
  return (
    <div className="wishlistMainWrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="wishlistMainPageTitleWrapper">
              <h1>Wishlist</h1>
            </div>
          </div>
        </div>
        <div className="row mt-3  px-4">
          <div className="col-md-12">
            <BreadCrumb name="Wishlist" />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
