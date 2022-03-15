import "./ShopFilter.css";
import { Accordion } from "react-bootstrap";

export default function ShopFilter() {
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
            <Accordion.Body>Accordion 1</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span>price</span>
            </Accordion.Header>
            <Accordion.Body>Accordion 2</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
