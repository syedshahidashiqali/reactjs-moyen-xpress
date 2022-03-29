import "./CheckoutMain.css";
import CartBreadcrumb from "../Cart/CartBreadcrumb";
import CheckoutTotal from "./CheckoutTotal";

export default function CheckoutMain() {
  return (
    <div className="checkoutMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-8">col-8</div>
          <div className="col-md-4">
            <CheckoutTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
