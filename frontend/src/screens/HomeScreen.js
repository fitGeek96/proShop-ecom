import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

export const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};
