import "./CustomerRegister.css";
import { Form } from "react-bootstrap";

export default function CustomerRegister() {
  return (
    <div className="customerRegisterWrapper">
      <div className="container">
        <div className="row jc-c mt-5 mb-3">
          <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
            <div className="customerRegisterBox">
              <div className="customerRegisterBoxTitle">
                <h3>Register as customer</h3>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control type="text" placeholder="User Name" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control type="email" placeholder="Email Address" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="password"
                        placeholder="Create Password"
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control type="text" placeholder="Phone Number" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="submit"
                        value="register"
                        className="customerRegisterSubmitBtn"
                      />
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
