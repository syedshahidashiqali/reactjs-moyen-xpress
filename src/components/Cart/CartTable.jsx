import "./CartTable.css";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Images_API } from "../../apiRoutes";

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
                  <span>${item.get_products.discounted_price}</span>
                </td>
                <td
                  className="cartProdAction"
                  onClick={() => {
                    cartDeleteHandler(item.id);

                    // const data = { cartId: item.id, userId: userId };
                    // mutate(data);
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
      </Table>
    </div>
  );
}
