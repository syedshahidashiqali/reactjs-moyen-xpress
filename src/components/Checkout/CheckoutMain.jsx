import "./CheckoutMain.css";
import CartBreadcrumb from "../Cart/CartBreadcrumb";
import CheckoutTotal from "./CheckoutTotal";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutMain() {
  return (
    <div className="checkoutMainWrapper">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-7 col-lg-7 pe-lg-4">
            <CheckoutForm />
          </div>
          <div className="col-md-4 col-lg-5">
            <CheckoutTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
