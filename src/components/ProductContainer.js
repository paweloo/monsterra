import React from "react";
import styled from "styled-components";
import "./productContainer.css";

const Container = styled.div`
  float: left;
  background-color: rgb(242, 246, 247);
  margin: 10px;
  width: 350px;
  height: 350px;
`;

const ProductContainer = ({ name, image, onClick }) => (
  <>
    <Container onClick={onClick}>
      <img className="productImage" alt={name} src={image} />{" "}
      <p className="productName">{name}</p>
    </Container>
  </>
);

export default ProductContainer;
