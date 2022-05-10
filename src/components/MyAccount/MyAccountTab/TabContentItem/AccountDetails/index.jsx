import styles from "./index.module.scss";
import { Row, Col, Form, Button } from "react-bootstrap";

function TabContentItemAccountDetails() {
  return (
    <div className={styles.tabContentAccDetMainWrapper}>
      <hr />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className={styles.headingTextWrapper}>
            <h3>
              <i className="fa-regular fa-user me-2" />
              Account Details
            </h3>
          </div>
        </Col>
      </Row>
      <Row className="pb-3 pt-2">
        <Col md={12} sm={12} xs={12}>
          <div className={styles.userDetHeadWrapper}>
            <h4>User Details</h4>
          </div>
        </Col>
      </Row>
      <Form>
        <Row className="mt-2">
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Username *</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              <p>
                This will be how your name will be displayed in the account
                section and in reviews
              </p>
            </Form.Group>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address *</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Zip Code *</Form.Label>
              <Form.Control type="text" placeholder="Zip code" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>City *</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Country *</Form.Label>
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Address One</Form.Label>
              <Form.Control type="text" placeholder="Address line one" />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Address Two</Form.Label>
              <Form.Control type="text" placeholder="Address line two" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={12} sm={12} xs={12}>
            <div className={styles.userDetHeadWrapper}>
              <h4>Password Change</h4>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                Current Password leave blank to leave unchanged
              </Form.Label>
              <Form.Control type="password" placeholder="Current password" />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                New Password leave blank to leave unchanged
              </Form.Label>
              <Form.Control type="password" placeholder="New password" />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12} sm={12} xs={12}>
            <div className={styles.btnWrapper}>
              <Button>save changes</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default TabContentItemAccountDetails;
