import CartBreadcrumb from "./CartBreadcrumb";
import "./CartMain.css";
import CartTable from "./CartTable";

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
          <div className="col-md-9 col-sm-12 col-12">
            <CartTable />
          </div>
          <div className="col-md-3 col-sm-12 col-12"></div>
        </div>
      </div>
    </div>
  );
}
