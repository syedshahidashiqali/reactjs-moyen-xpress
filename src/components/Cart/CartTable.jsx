import "./CartTable.css";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartTable() {
  return (
    <div className="cartTableWrapper">
      <Table className="cartTable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Attributes</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index}>
              <td className="cartProdImg">
                <div className="p-relative">
                  <Link to={`/product/id`} style={{ textDecoration: "none" }}>
                    <figure>
                      <img
                        src="https://moyenxpress.com/products/164401125115.jpg"
                        alt=""
                      />
                    </figure>
                  </Link>
                </div>
              </td>
              <td className="cartProdText">
                <Link to={`/product/id`} style={{ textDecoration: "none" }}>
                  Toshiba Canvio Basics
                </Link>
              </td>
              <td className="cartProdPrice">
                <span className="d-flex fd-c">
                  <del>$4.00</del>
                  $2.00
                </span>
              </td>
              <td className="cartProdAttr">
                <span>Black, 10"</span>
              </td>
              <td className="cartProdQty">
                <div className="cartProdQtyInputGroup">
                  <InputGroup>
                    <FormControl type="number" min={1} defaultValue={1} />
                    <Button>-</Button>
                    <Button>+</Button>
                  </InputGroup>
                </div>
              </td>
              <td className="cartProdSubTotal">
                <span>$250.00</span>
              </td>
              <td className="cartProdAction">
                <div className="cartProdActionWrapper">
                  <span>
                    <i className="fa-solid fa-trash me-2" />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
