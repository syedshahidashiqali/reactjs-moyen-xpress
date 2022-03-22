import "./VendorRegister.css";
import { Form } from "react-bootstrap";

export default function VendorRegister() {
  return (
    <div className="vendorRegisterWrapper">
      <div className="container">
        <Step1Form />
        <Step2Form />
      </div>
    </div>
  );
}

function Step1Form() {
  return (
    <div className="row jc-c mt-5">
      <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
        <div className="vendorRegisterBox">
          <div className="vendorRegisterBoxTitle">
            <h3>Register as vendor</h3>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Username" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="email" placeholder="Email" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="password" placeholder="Password" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Address One"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Address Two"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Zip Code" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Enter your City" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Enter your Country" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Phone" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12 text-center">
                  <Form.Label>Your Image</Form.Label>
                  <Form.Control type="file" className="vendorInputFile" />
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Step2Form() {
  return (
    <div className="row jc-c mt-5 mb-3">
      <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
        <div className="vendorRegisterBox">
          <div className="vendorRegisterBoxTitle">
            <h3>Register your shop</h3>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Shop Name" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="Shop Description" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12 text-center">
                  <Form.Label>Shop Logo</Form.Label>
                  <Form.Control type="file" className="vendorInputFile" />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Form.Control
                    type="submit"
                    value="create account and shop"
                    className="vendorRegisterSubmitBtn"
                  />
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
