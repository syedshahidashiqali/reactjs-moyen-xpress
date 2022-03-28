import CartBreadcrumb from "./CartBreadcrumb";
import "./CartMain.css";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import { Button } from "react-bootstrap";

export default function CartMain() {
  return (
    <div className="cartMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col-md-8 col-sm-12 col-12">
            <CartTable />
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div className="cartMainShopBtn">
                  <Button classNAme="d-flex jc-c ai-c">
                    <i className="fa-solid fa-arrow-left-long me-2" />
                    continue shopping
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="cartMainUpdateCartBtn d-flex jc-e">
                  <Button classNAme="d-flex jc-c ai-c">update cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
