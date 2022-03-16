import "./ShopPagination.css";
import { Pagination } from "react-bootstrap";

export default function ShopPagination() {
  return (
    <div className="shopPaginationWrapper">
      <Pagination>
        <div className="mainPaginationWrapper d-flex fd-c">
          <div className="prevNexBtnsWrapper d-flex jc-c">
            <Pagination.Prev>
              <i className="fa-solid fa-angles-left me-1" />
              Previous
            </Pagination.Prev>
            <Pagination.Next>
              Next
              <i className="fa-solid fa-angles-right ms-1" />
            </Pagination.Next>
          </div>
          <div className="allBtnsWrapper d-flex mt-4">
            <Pagination.First>
              <i className="fa-solid fa-angles-left" />
            </Pagination.First>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Last>
              <i className="fa-solid fa-angles-right" />
            </Pagination.Last>
          </div>
        </div>
      </Pagination>
    </div>
  );
}
