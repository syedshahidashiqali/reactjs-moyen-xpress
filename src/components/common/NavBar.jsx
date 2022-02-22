import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return <TopBar />;
}

function TopBar() {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  return (
    <Navbar className="header-top" expand="lg">
      <Container className="topContainer d-flex align-items-center">
        <Navbar.Brand href="#home" className="header-welcome">
          WELCOME TO MOYEN XPRESS!
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <Nav className="navBar-links">
            <Nav.Link href="#home">Contact Us</Nav.Link>
            <Nav.Link href="#link">My Account</Nav.Link>
            <Nav.Link href="#link" className="signin">
              <i className="fa-regular fa-user headerUserIcon" />
              Sign In / Register
            </Nav.Link>
            <NavDropdown
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title="User"
              id="basic-nav-dropdown"
              className="dropDown"
            >
              <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
