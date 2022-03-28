import "./CartBreadcrumb.css";
import { Breadcrumb } from "react-bootstrap";

export default function CartBreadcrumb() {
  return (
    <div className="cartBreadcrumbWrapper">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={"span"}>Shopping Cart</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={"span"}>Checkout</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={"span"}>Payment</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
