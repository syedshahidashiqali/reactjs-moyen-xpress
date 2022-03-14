import "./ShopMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";
import ShopBanner from "./ShopBanner";

export default function ShopMain() {
  return (
    <div className="shopWrapperMain mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <BreadCrumb name="Shop" />
          </div>
        </div>
        <div className="row">
          <ShopBanner />
        </div>
      </div>
    </div>
  );
}
