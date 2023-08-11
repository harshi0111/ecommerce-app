import React from "react";
import "../Styles/Cart.css";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { Container, Row, Col } from "reactstrap";
// import gown1 from "../images/Assets/gown1.jpg";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h1 className="fs-4 text-center">Your cart is Empty!</h1>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy_btn w-100">
                  <Link to="/Shop" className="link">
                    Continue Shopping
                  </Link>
                </button>
                <button className="buy_btn w-100 mt-3">
                  <Link to="/Checkout" className="link">
                    Checkout
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="img" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}px</td>
      <motion.td whileTap={{ scale: 0.9 }}>
        <FaTrash onClick={deleteProduct} />
      </motion.td>
    </tr>
  );
};

export default Cart;
