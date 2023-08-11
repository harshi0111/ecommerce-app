import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import "../Styles/Checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h4 className="mb-4 fw-bold">Billing Information</h4>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="number" placeholder="Enter Phone number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Street address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter City" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Postal Code" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty:
                  <span> {totalQuantity} items </span>
                </h6>
                <h6>
                  SubTotal:
                  <span> ${totalAmount} </span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    Free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
