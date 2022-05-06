import "./ShopMain.css";
import BreadCrumb from "../someCommon/BreadCrumb";
import ShopBanner from "./ShopBanner";
import ShopBrandSlider from "./ShopBrandSlider";
import ShopCategorySlider from "./ShopCategorySlider";
import ShopFilter from "./ShopFilter";
import {
  ContainerCard,
  ContainerCardPlaceholder,
} from "../common/CardContainer";
import { Form, Alert } from "react-bootstrap";
import ShopPagination from "./ShopPagination";
import ShopFilterOffCanvas from "./ShopFilterOffCanvas";
import { GETPRODUCTS } from "../../apiRoutes";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function ShopMain() {
  const fetchProducts = async () => {
    const res = await (await fetch(`${GETPRODUCTS}`)).json();
    return res.slice(0, 20);
  };

  const { status, data, error, refetch } = useQuery("products", fetchProducts);
  return (
    <div className="shopWrapperMain mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <BreadCrumb name="Shop" />
          </div>
        </div>
        <div className="row">
          <ShopBanner />
        </div>
        <div className="row mt-4">
          <div className="col-md-12 col-sm-12 col-12">
            <ShopBrandSlider />
          </div>
        </div>
        <div className="row mt-4 mb-4 mx-3">
          <div className="col-md-12 col-sm-12 col-12">
            <ShopCategorySlider />
          </div>
        </div>
        <hr />
        <div className="row mx-3">
          <div className="col-md-3 hideOn991Px">
            <ShopFilter />
          </div>
          <div className="col-md-9 col-sm-12 col-12">
            <div className="row">
              <div className="col showOn991Px">
                <div className="openFilterCompWrapper">
                  <ShopFilterOffCanvas />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="shopSortByWrapper">
                  <Form className="d-flex ai-c shopSortbyForm">
                    <Form.Label className="hideOn991Px">sort by:</Form.Label>
                    <Form.Select className="ms-2">
                      <option>Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by rating</option>
                      <option value="latest">Sort by latest</option>
                      <option value="low-to-high">
                        Sort by price: low to high
                      </option>
                      <option value="high-to-low">
                        Sort by price: high to low
                      </option>
                    </Form.Select>
                  </Form>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="shopshowManyWrapper">
                  <Form className="d-flex jc-e shopshowManyForm">
                    <Form.Select>
                      <option value="20">Show 20</option>
                      <option value="30">Show 30</option>
                      <option value="50">Show 50</option>
                      <option value="100">Show 100</option>
                    </Form.Select>
                  </Form>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              {status === "loading" &&
                arr?.map((item, index) => (
                  <div className="col-md-3 col-sm-4 col-6 mb-3" key={index}>
                    <ContainerCardPlaceholder />
                  </div>
                ))}
              {status === "success" &&
                data?.map((product, index) => (
                  <div className="col-md-3 col-sm-4 col-6 mb-3" key={index}>
                    <Link
                      to={`/product/${product?.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ContainerCard data={product} refetch={refetch} />
                    </Link>
                  </div>
                ))}
              {status === "error" && (
                <div className="col-md-12 col-sm-12 col-12">
                  <Alert variant="danger" show={true}>
                    <Alert.Heading>JSON API data fetch error !</Alert.Heading>
                    <p>{error.message}</p>
                  </Alert>
                </div>
              )}
            </div>
            <hr />
            <div className="row mt-4">
              <div className="col-md-12 d-flex jc-c">
                <h6>Showing 1 to 20 of 220 results</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12 col-sm-12 col-12 d-flex ai-c jc-c">
                <ShopPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
