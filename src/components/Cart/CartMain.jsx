import CartBreadcrumb from "./CartBreadcrumb";
import "./CartMain.css";

export default function CartMain() {
  return (
    <div className="cartMainWrapper">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
      </div>
    </div>
  );
}
