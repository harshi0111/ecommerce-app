import React, { useState, useEffect } from "react";
import Helmet from "../Components/Helmet";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../Styles/Home.css";
import Clock from "../Pages/Clock";
import products from "../images/Data/Product";
import Services from "../Pages/Services";
import ProductList from "../UI/ProductList";
import { motion } from "framer-motion";
import counterimg from "../images/Assets/counterimg.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const [dressesProducts, setDressesProducts] = useState([]);

  const [cropTopProducts, setCropTopProducts] = useState([]);

  const [gownProducts, setGownProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "Women T-shirts"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "Women Top"
    );

    const filteredDressesProducts = products.filter(
      (item) => item.category === "Women Dresses"
    );

    const filteredCropTopProducts = products.filter(
      (item) => item.category === "croptop"
    );

    const filteredGownProducts = products.filter(
      (item) => item.category === "Women Gown"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setDressesProducts(filteredDressesProducts);
    setCropTopProducts(filteredCropTopProducts);
    setGownProducts(filteredGownProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Fashion More Fashionable</h2>
                <p>
                  Try our fashionable designs as fashionable as you are and Our
                  fashionable design will give you the best comfortable
                  experience ever.
                </p>
                <p className="slogan">
                  <i>"If you love it, then flaunt it..."</i>
                </p>
                <button className="buy_btn">
                  <Link to="/Shop" className="link">
                    Shop Now
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img
                  src="https://media.istockphoto.com/id/1173289380/photo/unusual-3d-illustration-smart-phone-application.jpg?s=612x612&w=0&k=20&c=kBksv4roh72uQ5jSQUvhV9KSeIQvnqF1O2bCoLmJmsE="
                  alt="cart"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h1 className="section_title">Trending Products</h1>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h1 className="section_title">Best Sales</h1>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_content">
                <h2 className="fs-6 mb-2">Limited Offers</h2>
                <h3 className=" fs-5 mb-3">
                  Shop Quality and Fashionable Products
                </h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                <Link className="store" to="/shop">
                  Visit store
                </Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h1 className="section_title">New Arrivals</h1>
            </Col>
            <ProductList data={dressesProducts} />
            <ProductList data={cropTopProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h1 className="section_title">Popular in Category</h1>
            </Col>
            <ProductList data={gownProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
