import CartBreadcrumb from "./CartBreadcrumb";
import "./CartMain.css";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { testCART, CARTDELETE } from "../../apiRoutes";
import { useSelector } from "react-redux";
import axios from "axios";
import CartEmptyText from "./CartEmpty";

export default function CartMain() {
  const C = console.log.bind(console);
  const { userData } = useSelector((state) => state.auth);

  // get all cart items
  const fetchCartProducts = async () => {
    const res = await (await fetch(`${testCART}/${userData.id}`)).json();
    return res[0];
  };

  // delete cart item
  const cartDeleteHandler = async (id) => {
    const res = await axios.get(`${CARTDELETE}/${id}/${userData.id}`);
    refetch();
  };

  const { status, data, refetch } = useQuery("cartProducts", fetchCartProducts);
  return (
    <div className="cartMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
        {status === "success" && data !== undefined ? (
          <div className="row mt-5 mb-5">
            <div className="col-md-8 col-sm-12 col-12">
              <CartTable
                status={status}
                data={data}
                cartDeleteHandler={cartDeleteHandler}
              />
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="cartMainShopBtn">
                    <Button className="d-flex jc-c ai-c">
                      <i className="fa-solid fa-arrow-left-long me-2" />
                      continue shopping
                    </Button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="cartMainUpdateCartBtn d-flex jc-e">
                    <Button className="d-flex jc-c ai-c">update cart</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              <CartTotal data={data} />
            </div>
          </div>
        ) : (
          <CartEmptyText />
        )}
      </div>
    </div>
  );
}
