import "./ShopMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";
import ShopBanner from "./ShopBanner";
import ShopBrandSlider from "./ShopBrandSlider";
import ShopCategorySlider from "./ShopCategorySlider";

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
        <div className="row mt-4">
          <div className="col-md-12 col-sm-12 col-12">
            <ShopBrandSlider />
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-12 col-sm-12 col-12">
            <ShopCategorySlider />
          </div>
        </div>
      </div>
    </div>
  );
}
