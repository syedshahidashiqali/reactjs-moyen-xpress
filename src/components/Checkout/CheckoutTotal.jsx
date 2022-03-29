import "./CheckoutTotal.css";
import { Button, Form } from "react-bootstrap";

export default function CheckoutTotal() {
  return (
    <div className="checkoutTotalWrapper">
      <div className="checkoutTotalSummary">
        <h4>your order</h4>
        <div className="checkoutTotalOrderSummary">
          <h6>Product</h6>
          <div className="checkoutTotalOrderSummaryWrapper d-flex jc-sb">
            <div className="checkoutTotalOrderSummaryText">
              Raw Indian 100 Human Hair <b>x</b> 1
            </div>
            <div className="checkoutTotalOrderSummaryValue">$180.00</div>
          </div>
          <div className="checkoutTotalOrderSummaryWrapperTotal d-flex jc-sb">
            <div className="checkoutTotalOrderSummaryTextTotal">Total</div>
            <div className="checkoutTotalOrderSummaryValueTotal">$180.00</div>
          </div>
          <div className="checkoutTotalSelectWrapper mt-4 mb-4">
            <Form>
              <Form.Select defaultValue={"PLEASE SELECT A PAYMENT METHOD"}>
                <option hidden disabled>
                  PLEASE SELECT A PAYMENT METHOD
                </option>
                <option value="stripe">
                  VISA, MASTERCARD, AMERICAN EXPRESS
                </option>
                <option value="paypal">PayPal</option>
              </Form.Select>
            </Form>
          </div>
          <div className="checkoutTotalOrderSummaryBtnWrapper d-flex jc-c">
            <Button className="d-flex ai-c jc-c">place my order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
