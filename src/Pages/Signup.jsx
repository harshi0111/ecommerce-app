import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../Components/Helmet";
import "../Styles/Login.css";

const Signup = () => {
  const [email, setEmail] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [files, setFile] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>

              <Form className="auth_form">
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="file"
                    value={files}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button className="buy_btn auth_btn" onChange={handleSubmit}>
                  Create an account
                </button>
                <p className="mt-3">
                  Already have an account?
                  <Link to="/Login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
