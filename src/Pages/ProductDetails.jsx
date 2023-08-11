import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../images/Data/Product";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { imgUrl, productName, price, avgRating, shortDesc } = product;

  return (
    <Helmet title={productName}>
      <CommonSection />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i>
                        <FaStar />
                      </i>
                    </span>
                    <span>
                      <i>
                        <FaStar />
                      </i>
                    </span>
                    <span>
                      <i>
                        <FaStar />
                      </i>
                    </span>
                    <span>
                      <i>
                        <FaStar />
                      </i>
                    </span>
                    <span>
                      <i>
                        <FaStarHalfAlt />
                      </i>
                    </span>
                  </div>
                  <p>({avgRating}ratings)</p>
                </div>
                <span className="product_price">{price}</span>
                <p>{shortDesc}</p>
                <button className="buy_btn">Add to Cart</button>
              </div>
            </Col>
            <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
              Add to Cart
            </motion.button>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
