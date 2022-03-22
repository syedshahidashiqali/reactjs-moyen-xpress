import "./VendorLogin.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function VendorLogin() {
  return (
    <div className="vendorLoginWrapper">
      <div className="container">
        <div className="row jc-c mt-5 mb-3">
          <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
            <div className="vendorLoginBox">
              <div className="vendorLoginBoxTitle">
                <h3>Login as vendor</h3>
              </div>
              <Form>
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
                        type="submit"
                        value="login"
                        className="vendorLoginSubmitBtn"
                      />
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="row text-center mt-4">
              <div className="col-md-12">
                <div className="forgotPassword">
                  <span>forgot password?</span>
                </div>
              </div>
            </div>
            <div className="row text-center mt-2">
              <div className="col-md-12">
                <div className="alreadyHaveAcc">
                  <span>
                    Want to become a vendor?{" "}
                    <Link
                      to={"/register/vendor"}
                      style={{ textDecoration: "none" }}
                    >
                      <span>Sign Up!</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
