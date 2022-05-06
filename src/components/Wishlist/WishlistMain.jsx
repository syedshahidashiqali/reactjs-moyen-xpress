import "./WishlistMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Images_API, WISHLISTDATA, ADDTOWISHLIST } from "../../apiRoutes";
import axios from "axios";
import LoaderComp from "../LoaderComp";
import PageTitleBanner from "../PageTitleBanner";

export default function WishlistMain() {
  const { userData } = useSelector((state) => state.auth);

  const fetchWishlistData = async () => {
    const res = await (await fetch(`${WISHLISTDATA}/${userData.id}`)).json();
    return res[0];
  };

  const { status, data, refetch } = useQuery("wishlist", fetchWishlistData);

  // remove item from wishlist
  const wishlistDelHandler = async (e, id) => {
    e.preventDefault();
    const res = await axios.get(`${ADDTOWISHLIST}/${id}/${userData.id}`);
    refetch();
  };

  return (
    <div className="wishlistMainWrapper">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <PageTitleBanner title="Wishlist" />
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
            <div className="loaderWrapper d-flex ai-c jc-c">
              {status === "loading" && <LoaderComp />}
              {status === "error" && "Error.."}
            </div>
            <div className="wishlistTableWrapper">
              {status === "success" && (
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
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="wishlistProdImg">
                          <div className="p-relative">
                            <Link
                              to={`/product/${item.product_id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <figure>
                                <img
                                  src={`${Images_API}${item.get_products.images[0].name}`}
                                  alt=""
                                />
                              </figure>
                            </Link>
                          </div>
                        </td>
                        <td className="wishlistProdText">
                          <Link
                            to={`/product/${item.product_id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {item.get_products.description}
                          </Link>
                        </td>
                        <td className="wishlistProdPrice">
                          <span>${item.get_products.discounted_price}</span>
                        </td>
                        <td className="wishlistProdStockStatus">
                          <span>
                            {item.get_products.stock > 0
                              ? "In Stock"
                              : "Out of Stock"}
                          </span>
                        </td>
                        <td className="wishlistProdAction">
                          <div className="wishlistProdActionWrapper">
                            <span
                              onClick={(e) =>
                                wishlistDelHandler(e, item.product_id)
                              }
                            >
                              <i className="fa-solid fa-trash me-2" />
                              delete
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
