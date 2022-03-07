import "./Footer.css";
import logo from "../../images/footer-logo.png";
import { Form, FormControl, Button } from "react-bootstrap";
import googlePlayImg from "../../images/footerGoogleplayImg.png";
import appStoreImg from "../../images/footerAppstoreImg.png";

export default function Footer() {
  return (
    <>
      <FooterTop />
      <FooterBot />
    </>
  );
}

function FooterTop() {
  return (
    <div className="footerTop">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <figure className="footerLogo">
              <img src={logo} alt="Moyen Xpress Logo" />
            </figure>
          </div>
          <div className="col d-flex jc-c">
            <div className="footerSubscribe">
              <div className="footerSubscribeText">
                <h4>new to moyen?</h4>
                <p>
                  Subscribe to our newsletter to get updates on our latest
                  offers!
                </p>
              </div>
              <div className="footerSubscribeForm">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Enter Email Address"
                    className="me-2 footerSubscribeSearch"
                    aria-label="Search"
                  />
                  <Button className="footerSubscribeBtn">Subscribe</Button>
                </Form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footerDownloadApp">
              <div className="footerDownloadAppTop">
                <Button className="footerDownloadBtn">
                  <i className="fa-solid fa-download" />
                </Button>
                <div className="footerDownloadAppTopRight">
                  <h4>download moyen free app</h4>
                  <p>get acces to exclusive offers!</p>
                </div>
              </div>
              <div className="footerDownloadAppBot d-flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ecoders&hl=en_US&gl=US"
                  target="_blank"
                >
                  <img src={googlePlayImg} alt="Google Play" />
                </a>
                <a
                  href="https://apps.apple.com/pk/app/moyenxpress/id1604623592"
                  target="_blank"
                >
                  <img src={appStoreImg} alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterBot() {
  return (
    <div className="footerBot">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Title title={"let us help you"} />
            <ul className="footerList">
              <li className="footerListItem">
                <a href="">
                  <b>For Shipment:</b> moyenxpress trucking
                </a>
              </li>
              <li className="footerListItem">
                <a href="">
                  <b>Adress:</b> po box 48675 atlanta ga 30362
                </a>
              </li>
              <li className="footerListItem">
                <a href="">
                  <b>Email:</b> moyenxpress@gmai.com
                </a>
              </li>
              <li className="footerListItem">
                <a href="">
                  <b>Phone:</b> 4707758326
                </a>
              </li>
              <li className="footerListItem">
                <a href="">
                  <b>Phone:</b> 4707758328
                </a>
              </li>
              <li className="footerListItem">
                <a href="">
                  <b>Phone:</b> 4045425633
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <Title title={"about moyen"} />
            <ul className="footerList">
              <li className="footerListItem">
                <a href="">About Us</a>
              </li>
              <li className="footerListItem">
                <a href="">Careers</a>
              </li>
              <li className="footerListItem">
                <a href="">Express</a>
              </li>
              <li className="footerListItem">
                <a href="">Terms and Conditions</a>
              </li>
              <li className="footerListItem">
                <a href="">Privacy and Cookie Notice</a>
              </li>
              <li className="footerListItem">
                <a href="">Prime</a>
              </li>
              <li className="footerListItem">
                <a href="">Global</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <Title title={"make money with moyen"} />
            <ul className="footerList">
              <li className="footerListItem">
                <a href="">Sell on</a>
              </li>
              <li className="footerListItem">
                <a href="">Become a Sales Consultant</a>
              </li>
              <li className="footerListItem">
                <a href="">Become a Logistics Service Partner</a>
              </li>
              <li className="footerListItem">
                <a href="">Join the DA Academy</a>
              </li>
              <li className="footerListItem">
                <a href="">Join the KOL Program</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <Title title={"moyen international"} />
            <ul className="footerList">
              <li className="footerListItem">
                <a href="">Algeria</a>
              </li>
              <li className="footerListItem">
                <a href="">Egypt</a>
              </li>
              <li className="footerListItem">
                <a href="">Ghana</a>
              </li>
              <li className="footerListItem">
                <a href="">Ivory Coast</a>
              </li>
              <li className="footerListItem">
                <a href="">Kenya</a>
              </li>
              <li className="footerListItem">
                <a href="">Morocco</a>
              </li>
              <li className="footerListItem">
                <a href="">Senegal</a>
              </li>
              <li className="footerListItem">
                <a href="">Tunisia</a>
              </li>
              <li className="footerListItem">
                <a href="">Uganda</a>
              </li>
              <li className="footerListItem">
                <a href="">Zando</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ title }) {
  return <h5>{title}</h5>;
}
