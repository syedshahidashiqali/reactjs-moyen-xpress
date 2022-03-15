import "./ShopFilter.css";
import { Accordion, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function ShopFilter() {
  const [filterItems, setFilterItems] = useState([
    "fashion",
    "electronic",
    "supermarket",
    "health & Beauty",
    "home & office",
    "phone & tablets",
    "computing",
    "baby products",
    "gaming",
    "sporting goods",
  ]);

  const [priceFilterItems, setPriceFilterItems] = useState([
    "$0.00 - $49.00",
    "$50.00 - $99.00",
    "$100.00 - $149.00",
    "$150.00 - $299.00",
    "more than $300",
  ]);

  return (
    <div className="shopFilterWrapper">
      <div className="shopFilterTitle">
        <h4>Filter:</h4>
      </div>
      <div className="shopFilterAccordionWrapper">
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span>all Categories</span>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordionBodyList">
                {filterItems?.map((filterItem, index) => (
                  <FilterItems filterName={filterItem} />
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span>price</span>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="accordionBodyList">
                <>
                  {priceFilterItems?.map((filterItem, index) => (
                    <FilterItems filterName={filterItem} />
                  ))}
                  <Form className="accordionFilterPriceForm mt-3">
                    <Form.Control type="number" placeholder="$min" />
                    <span className="filterPriceDelimeter">-</span>
                    <Form.Control type="number" placeholder="$max" />
                    <Button className="btn-rounded">Go</Button>
                  </Form>
                  <div className="clearFilter mt-3">
                    <Button className="btn-rounded">clear filters</Button>
                  </div>
                </>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

function FilterItems({ filterName }) {
  return (
    <li className="accordionBodyListItem">
      <a href="">{filterName}</a>
    </li>
  );
}
