import React, { useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { Container, Row } from "reactstrap";
import { BsCart3 } from "react-icons/bs";
import logo from "../images/logo.png";
import { FaRegHeart, FaRegUser, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => {
    menuRef.current.classList.toggle("navigation");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <header id="header" className="sticky_header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <li>
                  <NavLink className="Links" to="Home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Links" to="Shop">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Links" to="Cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line">
                  <FaRegHeart />
                </i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line">
                  <BsCart3 />
                </i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <i>
                  <FaRegUser />
                </i>
              </span>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <FaBars />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
