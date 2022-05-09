import "./index.scss";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import TabItem from "./TabItem";
import TabContentItemDashboard from "./TabContentItem/Dashboard";
import TabContentItemOrders from "./TabContentItem/Orders";
import TabContentItemAccountDetails from "./TabContentItem/AccountDetails";
import TabContentItemFollowedVendors from "./TabContentItem/FollowedVendors";
import { useState } from "react";

function MyAccountTab() {
  const [key, setKey] = useState("dashboard");

  return (
    <div className="mainTabsWrapper">
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col lg={3} xl={3} md={12}>
            <div className="myAccTabWrapper">
              <Nav className="flex-column">
                <TabItem eventKey="dashboard" text="DASHBOARD" />
                <TabItem eventKey="orders" text="ORDERS" />
                <TabItem eventKey="account-details" text="ACCOUNT DETAILS" />
                <TabItem eventKey="followed-vendors" text="FOLLOWED VENDORS" />
              </Nav>
            </div>
          </Col>
          <Col lg={9} xl={9} md={12}>
            <div className="myAccTabContentWrapper">
              <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  <TabContentItemDashboard setKey={setKey} />
                </Tab.Pane>
                <Tab.Pane eventKey="orders">
                  <TabContentItemOrders />
                </Tab.Pane>
                <Tab.Pane eventKey="account-details">
                  <TabContentItemAccountDetails />
                </Tab.Pane>
                <Tab.Pane eventKey="followed-vendors">
                  <TabContentItemFollowedVendors />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MyAccountTab;
