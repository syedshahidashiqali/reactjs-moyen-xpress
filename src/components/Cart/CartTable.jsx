import "./CartTable.css";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Images_API } from "../../apiRoutes";
import { useEffect, useState } from "react";

export default function CartTable({ status, data, cartDeleteHandler }) {
  const C = console.log.bind(console);
  return (
    <div className="cartTableWrapper">
      {status === "error" && "Error while fetching data"}
      {status === "loading" && "fetching data"}
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
        <TableBody data={data} cartDeleteHandler={cartDeleteHandler} />
      </Table>
    </div>
  );
}

const TableBody = ({ data, cartDeleteHandler }) => {
  return (
    <tbody>
      {data?.map((item) => {
        return (
          <tr key={item.id}>
            <td className="cartProdImg">
              <div className="p-relative">
                <Link
                  to={`/product/${item.product_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <img
                      src={`${Images_API}${item.get_products.images[0].name}`}
                      alt="cart item"
                    />
                  </figure>
                </Link>
              </div>
            </td>
            <td className="cartProdText">
              <Link
                to={`/product/${item.product_id}`}
                style={{ textDecoration: "none" }}
              >
                {item.get_products.name}
              </Link>
            </td>
            <td className="cartProdPrice">
              <span className="d-flex fd-c">
                <del>${item.get_products.price}</del>$
                {item.get_products.discounted_price}
              </span>
            </td>
            <td className="cartProdAttr">
              <span>
                {item?.attributes[0]}, {item?.attributes[1]}"
              </span>
            </td>
            <CartInputItem price={item.get_products.discounted_price} />
            <td
              className="cartProdAction"
              onClick={() => {
                cartDeleteHandler(item.id);
              }}
            >
              <div className="cartProdActionWrapper">
                <span>
                  <i className="fa-solid fa-trash me-2" />
                </span>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

const CartInputItem = ({ price }) => {
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(price);

  useEffect(() => {
    setSubTotal((price * qty).toFixed(2));
  }, [qty]);

  // plus btn handler
  const incrementHandler = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // minus btn handler
  const decrementHandler = () => {
    if (qty !== 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  // when you directly change or type value in input box
  const cartCalculationHanlder = (e) => {
    setQty(parseInt(e.target.value));
  };
  return (
    <>
      <td className="cartProdQty">
        <div className="cartProdQtyInputGroup">
          <InputGroup>
            <FormControl
              type="number"
              min={1}
              value={qty}
              onChange={cartCalculationHanlder}
            />
            <Button onClick={decrementHandler}>-</Button>
            <Button onClick={incrementHandler}>+</Button>
          </InputGroup>
        </div>
      </td>
      <td className="cartProdSubTotal">
        <span>${subTotal}</span>
      </td>
    </>
  );
};
