import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "../Styles/Services.css";
import serviceData from "../images/Data/ServiceData.js";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div whileHover={{ scale: 1.1 }} className="service_item">
                <span>
                  <i>{item.icon}</i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
