import { Button } from "react-bootstrap";
import "./CartTotal.css";

export default function CartTotal() {
  return (
    <div className="cartTotalWrapper">
      <div className="cartTotalSummary">
        <h4>cart totals</h4>
        <div className="cartTotalOrderSummary">
          <h6>Product</h6>
          <div className="cartTotalOrderSummaryWrapper d-flex jc-sb">
            <div className="cartTotalOrderSummaryText">
              Raw Indian 100 Human Hair <b>x</b> 1
            </div>
            <div className="cartTotalOrderSummaryValue">$180.00</div>
          </div>
          <div className="cartTotalOrderSummaryWrapperTotal d-flex jc-sb">
            <div className="cartTotalOrderSummaryTextTotal">Total</div>
            <div className="cartTotalOrderSummaryValueTotal">$180.00</div>
          </div>
          <div className="cartTotalOrderSummaryBtnWrapper d-flex jc-c">
            <Button className="d-flex ai-c jc-c">
              proceed to checkout
              <i className="fa-solid fa-arrow-right-long ms-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
