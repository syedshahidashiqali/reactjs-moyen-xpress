// import "./index.scss";
import { Row, Col } from "react-bootstrap";

function TabContentItemDashboard() {
  return (
    <div className="tabContentItemWrapper">
      <Row>
        <TabCard icon="fa-regular fa-memo-circle-check" name="Orders" />
      </Row>
    </div>
  );
}

export default TabContentItemDashboard;

function TabCard({ icon, name }) {
  return (
    <div className="myAccTabCardWrapper">
      <Col lg={4} md={6} sm={4} xs={6} className="mb-4">
        <i className={icon} />
        <span>{name}</span>
      </Col>
    </div>
  );
}
