import CartBreadcrumb from "./CartBreadcrumb";
import "./CartMain.css";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function CartMain() {
  return (
    <div className="cartMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 d-flex jc-c">
            <CartBreadcrumb />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8 col-sm-12 col-12">
            <CartTable />
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
