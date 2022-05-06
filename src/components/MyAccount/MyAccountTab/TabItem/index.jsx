import "./index.scss";
import { Nav } from "react-bootstrap";

function TabItem({ eventKey, text }) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>
        <div className="tabInnerWrapper">
          <div className="tabInnerTextWrapper">
            <span>{text}</span>
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
}

export default TabItem;
