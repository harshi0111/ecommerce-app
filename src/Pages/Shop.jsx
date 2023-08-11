import React, { useState } from "react";
import CommonSection from "../Components/CommonSection";
import Helmet from "../Components/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../Styles/Shop.css";
import ProductList from "../UI/ProductList.jsx";
import { FaSearch } from "react-icons/fa";
import products from "../images/Data/Product";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "dresses") {
      const filteredProducts = products.filter(
        (item) => item.category === "Women Dresses"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "top") {
      const filteredProducts = products.filter(
        (item) => item.category === "Women Top"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "croptop") {
      const filteredProducts = products.filter(
        (item) => item.category === "croptop"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "tshirts") {
      const filteredProducts = products.filter(
        (item) => item.category === "Women T-shirts"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "gown") {
      const filteredProducts = products.filter(
        (item) => item.category === "Women Gown"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter_widget " onChange={handleFilter}>
                <select>
                  <option>Filter By Category</option>
                  <option value="top">Women Tops</option>
                  <option value="tshirts">T-Shirts</option>
                  <option value="dresses">Dresses</option>
                  <option value="croptop">Croptops</option>
                  <option value="gown">Gown</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search Here..."
                  onChange={handleSearch}
                />
                <span>
                  <i>
                    <FaSearch />
                  </i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
