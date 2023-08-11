import React from "react";
import { Container } from "reactstrap";
import "../Components/CommonSection.css";
const CommonSection = ({ title }) => {
  return (
    <section className="common_section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
