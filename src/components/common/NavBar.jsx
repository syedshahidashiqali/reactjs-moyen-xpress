import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import "./NavBar.css";
import logo from "../../images/header-logo.png";
import banner from "../../images/header-banner.gif";

export default function NavBar() {
  return (
    <>
      <HeaderTop />
      <HeaderMid />
    </>
  );
}

function HeaderTop() {
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

function HeaderMid() {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  return (
    <Navbar expand="lg" className="headerMid">
      <Container className="headerMidContainer">
        <NavHam />
        <Navbar.Brand href="#home">
          <img src={logo} className="headerMidLogo" alt="Moyen Xpress Logo"/>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <img src={banner} className="headerMidBanner" alt="Sales Banner" />
        </Navbar.Brand>
        <div className="d-flex justify-content-end headerLast">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">
              <i className="fa-regular fa-user"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fa-regular fa-heart"></i>
            </Nav.Link>
            <NavDropdown
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title={<CartNav />}
              id="basic-nav-dropdown"
              className="headerMidDropdown"
            >
              <NavDropItem />
              <NavDropItem />
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

function CartNav() {
  return (
    <>
      <i className="fa-solid fa-cart-shopping cartIcon">
        <span className="cartCount">2</span>
      </i>
      <span className="cartText">Cart</span>
    </>
  );
}

function NavDropItem() {
  return (
    <NavDropdown.Item href="#action/3.1" className="headerMidDropdownItem">
      <CartItems />
    </NavDropdown.Item>
  );
}
function CartItems() {
  return (
    <div className="d-flex jc-sb ai-c">
      <div className="prodLeft d-flex fd-c">
        <p
          className="prodDesc"
          style={{
            color: "#333",
            fontWeight: "500",
          }}
        >
          Beige knitted elas <br />
          tic runner shoes
        </p>
        <h4
          className="prodQty"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#512500" }}
        >
          <span style={{ color: "#666", fontWeight: "400" }}>1 x</span> $25.68
        </h4>
      </div>
      <div className="prodRight d-flex ai-c jc-e p-r" style={{ width: "100%" }}>
        <img
          // style={{ width: "50%" }}
          width={80}
          height={80}
          src={
            "https://sneakerbardetroit.com/wp-content/uploads/2018/07/Concepts-x-adidas-Energy-Boost.jpg"
          }
          alt=""
        />
        <button className="btn cartItemRemoveBtn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

function NavHam() {
  const toggleShow = () => {
    document.getElementById("root").style.marginLeft = "300px";
  };

  const handleClose = () => {
    document.getElementById("root").style.marginLeft = "0";
  };

  return (
    <>
      <Navbar.Toggle
        aria-controls="offcanvasNavbar"
        className="headerMidToggler"
      >
        <i className="fa-solid fa-bars" />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        onHide={handleClose}
        onShow={toggleShow}
      >
        <Offcanvas.Header
          className="headerOffCanvas"
          closeButton
          closeVariant="white"
        >
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <Form className="d-flex sideBarForm">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 sideBarSearchInput"
                aria-label="Search"
                required
              />
              <Button className="searchBtn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sideBarOffCanvasBody">
          <SideBarTabs />
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
}

function SideBarTabs() {
  return (
    <Tabs
      defaultActiveKey="main-menu"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex fd-r jc-sb headerSideBarTabs"
    >
      <Tab eventKey="main-menu" title="MAIN MENU">
        <MainMenuTabContent />
      </Tab>
      <Tab eventKey="categories" title="CATEGORIES">
        <CategoriesTabContent />
      </Tab>
    </Tabs>
  );
}

function MainMenuTabContent() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column sideBarContentItems">
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title="Shop"
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title="Vendor"
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title="Blog"
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title="Pages"
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title="Elements"
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

function CategoriesTabContent() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column sideBarContentItems">
      <NavDropdown
        title={<Icon className={"fa-solid fa-shirt"} name="Fashion" />}
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title={<Icon className={"fa-solid fa-house"} name="Home & Garden" />}
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title={<Icon className={"fa-solid fa-desktop"} name="Electronics" />}
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavDropdown
        title={<Icon className={"fa-solid fa-chair"} name="Furniture" />}
        id="navbarScrollingDropdown"
        drop="end"
        className="sideBarDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-heart-pulse"}
        name={"Health and Beauty"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-gift"}
        name={"Gift Ideas"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-gamepad"}
        name={"Toys and Games"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-cookie-bite"}
        name={"Cooking"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-mobile"}
        name={"Smart Phones"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-camera"}
        name={"Cameras & Photos"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <NavLinkForCategories
        className={"fa-solid fa-gem"}
        name={"Accessories"}
      />
      <NavDropdown.Divider className="sideBarDividerLine" />
      <Nav.Link href="/" className="sideBarLastLink">View all categories</Nav.Link>

    </Nav>
  );
}

function Icon({ className, name }) {
  return (
    <>
      <i className={className} />
      <span className="sideBarCategoryName">{name}</span>
    </>
  );
}

function NavLinkForCategories({ path, className, name }) {
  return (
    <Nav.Link href={!path && ""}>
      <Icon className={className} name={name} />
    </Nav.Link>
  );
}
