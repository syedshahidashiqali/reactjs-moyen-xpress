import { useWindowScroll } from "react-use";
import { useState, useRef } from "react";
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
  DropdownButton,
  Modal,
} from "react-bootstrap";
import "./NavBar.css";
import logo from "../../images/header-logo.png";
import banner from "../../images/header-banner.gif";

export default function NavBar() {
  return (
    <>
      <HeaderTop />
      <HeaderMid />
      <HeaderBot />
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

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
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
            <Nav.Link className="signin" onClick={handleShowModal}>
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
      <SigninModal
        data={{ showModal, setShowModal, handleCloseModal, handleShowModal }}
      />
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
          <img src={logo} className="headerMidLogo" alt="Moyen Xpress Logo" />
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
      <Nav.Link href="/" className="sideBarLastLink">
        View all categories
      </Nav.Link>
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

function HeaderBot() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  const headerBotRef = useRef(null);

  const { y } = useWindowScroll(headerBotRef);
  return (
    <div
      ref={headerBotRef}
      className={`headerBot ${
        y >= 258
          ? "stickyPosition animate__animated animate__fadeInDown animate__faster"
          : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <DropdownButton
              id="dropdown-item-button"
              title={<HeaderBotDropDownTitle />}
              className="headerBotDropDown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Nav
                defaultActiveKey="/home"
                className="flex-column headerBotContentItems"
              >
                <NavDropdown
                  title={
                    <Icon className={"fa-solid fa-shirt"} name="Fashion" />
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="headerBotDropdown"
                  show={show1}
                  onMouseEnter={() => setShow1(!show1)}
                  onMouseLeave={() => setShow1(false)}
                >
                  <div className="headerBotMain d-flex jc-sb">
                    <div className="headerBotDropleft">
                      <HeaderBotNavLink
                        text={"Women"}
                        className={"headerBotDropTitle"}
                      />
                      <NavDropdown.Divider className="sideBarDividerLine" />
                      <HeaderBotNavLink text={"New Arrivals"} />
                      <HeaderBotNavLink text={"Best Sellers"} />
                      <HeaderBotNavLink text={"Trending"} />
                      <HeaderBotNavLink text={"Clothing"} />
                      <HeaderBotNavLink text={"Shoes"} />
                      <HeaderBotNavLink text={"Bags"} />
                      <HeaderBotNavLink text={"Accessories"} />
                      <HeaderBotNavLink text={"Jewelry  & Watches"} />
                      <HeaderBotNavLink text={"Sale"} />
                    </div>
                    <div className="headerBotDropRight">
                      <HeaderBotNavLink
                        text={"Men"}
                        className={"headerBotDropTitle"}
                      />
                      <NavDropdown.Divider className="sideBarDividerLine" />
                      <HeaderBotNavLink text={"New Arrivals"} />
                      <HeaderBotNavLink text={"Best Sellers"} />
                      <HeaderBotNavLink text={"Trending"} />
                      <HeaderBotNavLink text={"Clothing"} />
                      <HeaderBotNavLink text={"Shoes"} />
                      <HeaderBotNavLink text={"Bags"} />
                      <HeaderBotNavLink text={"Accessories"} />
                      <HeaderBotNavLink text={"Jewelry  & Watches"} />
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavDropdown
                  title={
                    <Icon
                      className={"fa-solid fa-house"}
                      name="Home & Garden"
                    />
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="headerBotDropdown"
                  show={show2}
                  onMouseEnter={() => setShow2(!show2)}
                  onMouseLeave={() => setShow2(false)}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavDropdown
                  title={
                    <Icon
                      className={"fa-solid fa-desktop"}
                      name="Electronics"
                    />
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="headerBotDropdown"
                  show={show3}
                  onMouseEnter={() => setShow3(!show3)}
                  onMouseLeave={() => setShow3(false)}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavDropdown
                  title={
                    <Icon className={"fa-solid fa-chair"} name="Furniture" />
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="headerBotDropdown"
                  show={show4}
                  onMouseEnter={() => setShow4(!show4)}
                  onMouseLeave={() => setShow4(false)}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-heart-pulse"}
                  name={"Health and Beauty"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-gift"}
                  name={"Gift Ideas"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-gamepad"}
                  name={"Toys and Games"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-cookie-bite"}
                  name={"Cooking"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-mobile"}
                  name={"Smart Phones"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-camera"}
                  name={"Cameras & Photos"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <NavLinkForCategories
                  className={"fa-solid fa-gem"}
                  name={"Accessories"}
                />
                <NavDropdown.Divider className="headerBotDividerLine" />
                <Nav.Link href="/" className="headerBotLastLink">
                  View all categories
                </Nav.Link>
              </Nav>
            </DropdownButton>
          </div>
          <div className="col-7">
            <Form className="d-flex headerBotForm">
              <Form.Select className="headerBotSelect">
                <option>All Categories</option>
                <option value="Fashion">Fashion</option>
                <option value="Furniture">Furniture</option>
                <option value="Shoes">Shoes</option>
                <option value="Sports">Sports</option>
                <option value="Games">Games</option>
                <option value="Computers">Computers</option>
                <option value="Electronics">Electronics</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Clothing">Clothing</option>
              </Form.Select>
              <FormControl
                type="search"
                placeholder="Search in..."
                className="headerBotSearchInput"
                aria-label="Search"
                required
              />
              <Button className="headerBotSearchBtn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
          </div>
          <div className="col-2 d-flex ai-c jc-c">
            <a className="headerBotRightEnd d-flex ai-c jc-c">
              <i className="fa-solid fa-tag" />
              <span className="mx-3">Daily Deals</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderBotDropDownTitle() {
  return (
    <>
      <i className="fa-solid fa-bars-staggered"></i>
      <span className="headerBotDropDownTitle">BROWSE CATEGORIES</span>
    </>
  );
}

function HeaderBotNavLink({ path, text, className }) {
  return (
    <NavDropdown.Item
      className={className ? className : ""}
      href={path && path}
    >
      {text}
    </NavDropdown.Item>
  );
}

function SigninModal({ data }) {
  const { showModal, setShowModal, handleCloseModal, handleShowModal } = data;
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <div className="headerSigninModalHeader">
        <Modal.Header closeButton>
          <Modal.Title as="h5">
            Sign in / Register for Vendors and Consumers
          </Modal.Title>
        </Modal.Header>
      </div>
      <div className="headerSigninModalBody">
        <Modal.Body>
          <div className="headerSigninModalBodyBtns">
            <Button onClick={handleCloseModal}>as consumer</Button>
            <Button onClick={handleCloseModal}>as vendor</Button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}
