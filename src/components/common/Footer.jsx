import "./Footer.css";
import logo from "../../images/footer-logo.png";
import { Form, FormControl, Button } from "react-bootstrap";
import googlePlayImg from "../../images/footerGoogleplayImg.png";
import appStoreImg from "../../images/footerAppstoreImg.png";

export default function Footer() {
  return (
    <>
      <FooterTop />
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
