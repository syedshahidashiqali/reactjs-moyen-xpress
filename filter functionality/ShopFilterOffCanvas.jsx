import "./ShopFilterOffCanvas.css";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ShopFilter from "./ShopFilter";

export default function ShopFilterOffCanvas({ getProducts }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    document.getElementById("root").style.marginLeft = "300px";
    setShow(true);
  };

  const handleClose = () => {
    document.getElementById("root").style.marginLeft = "0";
    setShow(false);
  };

  return (
    <>
      <Button className="openFilterBtn" onClick={handleShow}>
        <i className="fa-solid fa-bars-staggered me-2" />
        <span>filters</span>
      </Button>
      <Offcanvas
        id="shopFilterOffCanvas"
        aria-labelledby="shopFilterOffCanvas"
        placement="start"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header
          className="headerOffCanvas"
          closeButton
          closeVariant="white"
        />
        <Offcanvas.Body>
          <ShopFilter getProducts={getProducts} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
