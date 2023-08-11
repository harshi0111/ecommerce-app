import React from "react";
import { motion } from "framer-motion";
import "../Styles/ProductCard.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "./cartSlice";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className=" cards mb-2 ">
      <div className="product_item">
        <div className="product_img ">
          <motion.img whileHover={{ scale: 0.9 }} src={item.url} alt="" />
        </div>
        <div className="product_info">
          <h3 className="product_name">
            <Link to={`/Shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
          <div className="product_card-bottom"></div>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;
