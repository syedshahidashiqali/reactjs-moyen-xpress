import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import PageTitleBanner from "../PageTitleBanner";
import BreadCrumb from "../someCommon/BreadCrumb";
import MyAccountTab from "./MyAccountTab";

function MyAccountMain() {
  return (
    <div className={styles.myAccountMainWrapper}>
      <Container fluid>
        <Row>
          <PageTitleBanner title="My Account" />
        </Row>
        <Row className="mt-3 px-4">
          <Col md={12}>
            <BreadCrumb name="My account" />
          </Col>
        </Row>
        <Row className="mt-5">
          <MyAccountTab />
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountMain;
