import "./CustomerRegister.css";
import { Form, Toast, ToastContainer } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";
import { SIGNUP, LOGIN } from "../../apiRoutes";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

export default function CustomerRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state for showing error toasts
  const [toastshow, setToastShow] = useState(false);
  const [error, setError] = useState([]);

  // form's inputs ref
  const registerFormUsernameRef = useRef(null);
  const registerFormEmailRef = useRef(null);
  const registerFormPasswordRef = useRef(null);
  const registerFormPhoneNumberRef = useRef(null);

  // form submit handler
  const submitRegisterFormHandler = async (e) => {
    e.preventDefault();

    // all input values
    const username = registerFormUsernameRef.current.value;
    const email = registerFormEmailRef.current.value;
    const password = registerFormPasswordRef.current.value;
    const phoneNumber = registerFormPhoneNumberRef.current.value;

    // signup api
    await axios
      .post(SIGNUP, {
        username: username,
        email: email,
        password: password,
        phone_number: phoneNumber,
      })
      .then((res) => {
        // console.log(42, res);
        if (res?.data[0]?.message === "User Created Successfully") {
          setError([]);
          setToastShow(false);
          // login api after user signup
          axios
            .post(LOGIN, {
              email,
              password,
            })
            .then((resLogin) => {
              console.log(52, resLogin);
              dispatch(login(resLogin?.data[0]?.user));
              navigate("/", {
                replace: true,
              });
            });
        } else if (
          res.data.hasOwnProperty("phone_number") === false &&
          res.data.hasOwnProperty("email") === true
        ) {
          setToastShow(true);
          setError([res?.data?.email[0]]);
        } else if (
          res.data.hasOwnProperty("phone_number") === true &&
          res.data.hasOwnProperty("email") === false
        ) {
          setToastShow(true);
          setError([res?.data?.phone_number[0]]);
        } else if (
          res.data.hasOwnProperty("phone_number") === true &&
          res.data.hasOwnProperty("email") === true
        ) {
          setToastShow(true);
          setError([res?.data?.email[0], res?.data?.phone_number[0]]);
        }
      })
      .catch((err) => console.log(79, err));
  };
  return (
    <div className="customerRegisterWrapper">
      <div className="container">
        <div className="row jc-c mt-5 mb-3">
          <div className="col-md-6 col-sm-6 col-ms-offset-3 col-sm-offset-3">
            <div className="customerRegisterBox">
              <div className="customerRegisterBoxTitle">
                <h3>Register as customer</h3>
              </div>
              <Form onSubmit={submitRegisterFormHandler}>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        ref={registerFormUsernameRef}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        ref={registerFormEmailRef}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="password"
                        placeholder="Create Password"
                        ref={registerFormPasswordRef}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        ref={registerFormPhoneNumberRef}
                      />
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
      <ToastMessage data={{ toastshow, setToastShow, error }} />
    </div>
  );
}

function ToastMessage({ data }) {
  const { toastshow, setToastShow, error } = data;

  return (
    <ToastContainer position="middle-end" style={{ zIndex: "1" }}>
      {error.length >= 1 &&
        error?.map((item, index) => (
          <Toast
            bg="secondary"
            onClose={() => setToastShow(false)}
            show={toastshow}
            delay={3000}
            autohide
            key={index}
          >
            <Toast.Header
            // style={
            //   {
            //     backgroundColor: "#b64400",
            //     backgroundColor: "#512500",
            //     color: "#fff",
            //     border: "none",
            //   }
            // }
            >
              <strong className="me-auto">Warning!</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body
              style={{
                // backgroundColor: "#512500",
                // backgroundColor: "#b64400",
                color: "#fff",
              }}
            >
              {item}
            </Toast.Body>
          </Toast>
        ))}
    </ToastContainer>
  );
}
