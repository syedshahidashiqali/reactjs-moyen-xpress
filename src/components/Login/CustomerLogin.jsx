import "./CustomerLogin.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { LOGIN } from "../../apiRoutes";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

export default function CustomerLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginFormEmailRef = useRef(null);
  const loginFormPasswordRef = useRef(null);

  // form submit handler
  const submitLoginFormHandler = async (e) => {
    e.preventDefault();
    const email = loginFormEmailRef.current.value;
    const password = loginFormPasswordRef.current.value;
    await axios
      .post(LOGIN, {
        email,
        password,
      })
      .then((res) => {
        if (
          res.data[0].message === "Email not found" ||
          res.data[0].message === "Password is incorrect"
        ) {
          alert(res.data[0].message);
        } else {
          dispatch(login(res.data[0].user));
          navigate("/", {
            replace: true,
          });
        }
      });
  };
  return (
    <div className="customerLoginWrapper">
      <div className="container">
        <div className="row jc-c mt-5 mb-3">
          <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
            <div className="customerLoginBox">
              <div className="customerLoginBoxTitle">
                <h3>Login as customer</h3>
              </div>
              <Form onSubmit={submitLoginFormHandler}>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        ref={loginFormEmailRef}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={loginFormPasswordRef}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="submit"
                        value="login"
                        className="customerLoginSubmitBtn"
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
                    Don't have an account yet?{" "}
                    <Link
                      to={"/register/customer"}
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
