import "./WishlistMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WishlistMain() {
  return (
    <div className="wishlistMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="wishlistMainPageTitleWrapper">
              <h1>Wishlist</h1>
            </div>
          </div>
        </div>
        <div className="row mt-3 px-4">
          <div className="col-md-12">
            <BreadCrumb name="Wishlist" />
            <hr />
          </div>
        </div>
        <div className="row px-4 mt-4">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="wishlistTilteWrapper">
              <h3>My wishlist</h3>
            </div>
          </div>
        </div>
        <div className="row px-4 mt-2">
          <div className="col-md-12">
            <div className="wishlistTableWrapper">
              <Table className="wishlistTable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <tr key={index}>
                      <td className="wishlistProdImg">
                        <div className="p-relative">
                          <Link
                            to={`/product/id`}
                            style={{ textDecoration: "none" }}
                          >
                            <figure>
                              <img
                                src="https://moyenxpress.com/products/164401125115.jpg"
                                alt=""
                              />
                            </figure>
                          </Link>
                        </div>
                      </td>
                      <td className="wishlistProdText">
                        <Link
                          to={`/product/id`}
                          style={{ textDecoration: "none" }}
                        >
                          Toshiba Canvio Basics 2TB Portable External Hard Drive
                          USB 3.0
                        </Link>
                      </td>
                      <td className="wishlistProdPrice">
                        <span>$2.00</span>
                      </td>
                      <td className="wishlistProdStockStatus">
                        <span>In Stock</span>
                      </td>
                      <td className="wishlistProdAction">
                        <div className="wishlistProdActionWrapper">
                          <span>
                            <i className="fa-solid fa-trash me-2" />
                            delete
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
