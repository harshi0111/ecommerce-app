import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";
import logo from "../images/logo.png";

import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Footer className="footer text-center text-lg-start">
      <section className=" footer_links d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="facebook.com" className="me-4 text-reset">
            <FaFacebook color="secondary" fab icon="facebook-f" />
          </a>
          <a href="twitter.com" className="me-4 text-reset">
            <FaTwitter color="secondary" fab icon="twitter" />
          </a>
          <a href="google.com" className="me-4 text-reset">
            <FaGoogle color="secondary" fab icon="google" />
          </a>
          <a href="instagram.com" className="me-4 text-reset">
            <FaInstagram color="secondary" fab icon="instagram" />
          </a>
          <a href="linkedin.com" className="me-4 text-reset">
            <FaLinkedinIn color="secondary" fab icon="linkedin" />
          </a>
          <a href="github.com" className="me-4 text-reset">
            <FaGithub color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p>
                Here you can shop what you want and grab all the fashionale
                products.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className=" products_links mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  T-shirts
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tops
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Gown
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Crop Tops
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dresses
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className=" useful_links mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="shop" className="text-reset">
                  Shop
                </a>
              </p>
              <p>
                <a href="cart" className="text-reset">
                  Cart
                </a>
              </p>
              <p>
                <a href="login" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="policy" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome color="secondary" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope
                  color="secondary"
                  icon="envelope"
                  className="me-3"
                />
                info@example.com
              </p>
              <p>
                <FaPhone color="secondary" icon="phone" className="me-3" /> + 91
                8765490842
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://shopcart.com/">
          ShopCart.com
        </a>
      </div>
    </Footer>
  );
};

export default Footer;
