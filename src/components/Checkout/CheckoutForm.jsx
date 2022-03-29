import "./CheckoutForm.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function CheckoutForm() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="checkoutFormMainWrapper">
      <div className="checkoutForm">
        <div className="checkoutFormWrapper">
          <Form>
            <div className="checkoutForm1ContentsWrapper">
              <h4 className="pb-3 pt-1">shipping details</h4>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="House number and street name"
                />
              </Form.Group>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <Form.Group className="mb-3">
                    <Form.Label>Town / City *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <Form.Group className="mb-3">
                    <Form.Label>State *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <Form.Group className="mb-3">
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Order notes (optional)</Form.Label>
                <Form.Control as="textarea" rows={4} cols={30} />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Check
                id="checkoutCheckbox"
                checked={checked}
                type="checkbox"
                label="Billing details same as Shipping details."
                onChange={() => setChecked(!checked)}
              />
            </Form.Group>
            {checked === false && (
              <div
                className={
                  "checkoutForm2ContentsWrapper animate__animated animate__fadeInLeft"
                }
              >
                <h4 className="pb-3 pt-1">billing details</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House number and street name"
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <Form.Group className="mb-3">
                      <Form.Label>Town / City *</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <Form.Group className="mb-3">
                      <Form.Label>State *</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP *</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <Form.Group className="mb-3">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Order notes (optional)</Form.Label>
                  <Form.Control as="textarea" rows={4} cols={30} />
                </Form.Group>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
