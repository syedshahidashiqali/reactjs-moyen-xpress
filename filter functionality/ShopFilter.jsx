import "./ShopFilter.css";
import { Accordion, Form, Button, Placeholder, Alert } from "react-bootstrap";
import { useState } from "react";
import { useQuery } from "react-query";
import { ALLCATEGORY } from "../../apiRoutes";

export default function ShopFilter({ getProducts }) {
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

  const fetchFilters = async () => {
    const res = await (await fetch(`${ALLCATEGORY}`)).json();
    return res;
  };

  const {
    data: filters,
    status,
    error,
  } = useQuery("filters", fetchFilters, { staleTime: 1000 * 60 * 5 });
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
                {status === "success" &&
                  filters?.map((filterItem, index) => (
                    <li
                      className="accordionBodyListItem"
                      key={index}
                      onClick={() => {
                        getProducts(filterItem?.id);
                      }}
                    >
                      <a>{filterItem?.name}</a>
                    </li>
                    // <FilterItems
                    //   filterName={filterItem?.name}
                    //   key={index}
                    //   onClick={() => console.log(54, filterItem?.id)}
                    // />
                  ))}

                {status === "loading" &&
                  filterItems?.map((filterItem, index) => (
                    <FilterItemsPlaceholder key={index} />
                  ))}

                {status === "error" && (
                  <Alert variant="danger" show={true}>
                    <Alert.Heading>
                      Error while fetching categories data!
                    </Alert.Heading>
                    <p>{error.message}</p>
                  </Alert>
                )}
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
                    <FilterItems filterName={filterItem} key={index} />
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

function FilterItemsPlaceholder() {
  return (
    <li className="accordionBodyListItem">
      <Placeholder as={"div"} animation="glow">
        <Placeholder xs={8} className="rounded" />
      </Placeholder>
    </li>
  );
}
