import "./index.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function TabContentItemDashboard({ setKey }) {
  return (
    <div className="tabContentItemWrapper">
      <Row>
        <TabCard
          icon="fa-regular fa-clipboard"
          name="ORDERS"
          eventKey="orders"
          setKey={setKey}
        />
        <TabCard
          icon="fa-regular fa-user"
          name="ACCOUNT DETAILS"
          eventKey="account-details"
          setKey={setKey}
        />
        <TabCard icon="fa-regular fa-heart" name="WISHLIST" />
        <TabCard
          setKey={setKey}
          icon="fa-regular fa-user"
          name="FOLLOWED VENDORS"
          eventKey="followed-vendors"
        />
      </Row>
    </div>
  );
}

export default TabContentItemDashboard;

function TabCard({ icon, name, eventKey, setKey }) {
  return eventKey != undefined ? (
    <Col lg={4} md={6} sm={4} xs={6} className="mb-4">
      <div
        className="myAccTabCardWrapper d-flex fd-c jc-c ai-c"
        key={eventKey}
        onClick={() => setKey(eventKey)}
      >
        <i className={icon} />
        <span className="mt-3">{name}</span>
      </div>
    </Col>
  ) : (
    <Col lg={4} md={6} sm={4} xs={6} className="mb-4">
      <Link to="/wishlist" style={{ textDecoration: "none" }}>
        <div
          className="myAccTabCardWrapper d-flex fd-c jc-c ai-c"
          key={eventKey}
        >
          <i className={icon} />
          <span className="mt-3">{name}</span>
        </div>
      </Link>
    </Col>
  );
}
