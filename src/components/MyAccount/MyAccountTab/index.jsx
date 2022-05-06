import "./index.scss";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import TabItem from "./TabItem";
import TabContentItemDashboard from "./TabContentItem/Dashboard";

function MyAccountTab() {
  return (
    <div className="mainTabsWrapper">
      <Tab.Container defaultActiveKey="dashboard">
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
                  <TabContentItemDashboard />
                </Tab.Pane>
                <Tab.Pane eventKey="orders">
                  {/* <TabContentItem /> */}
                </Tab.Pane>
                <Tab.Pane eventKey="account-details">
                  {/* <TabContentItem /> */}
                </Tab.Pane>
                <Tab.Pane eventKey="followed-vendors">
                  {/* <TabContentItem /> */}
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
