import React from "react";
import styled from "styled-components";
import "./productContainer.css";

const Container = styled.div`
  position: absolute;
  background-color: rgb(242, 246, 247);
  width: 60%;
  height: 100vh;
  right: 0;
`;

const ProductDetails = ({
  name,
  details,
  price,
  image,
  back,
  buy,
  isBought,
}) => (
  <>
    <Container>
      <h1 onClick={back}>Go Back</h1>
      <img alt={name} src={image} className="productImage" />
      <h1>{name}</h1>
      <p>{details}</p>
      <p>{price}</p>
      <h1 onClick={buy}>Buy</h1>
      {isBought === true && (
        <h2 style={{ color: "greenyellow" }}>Item bought!</h2>
      )}
    </Container>
  </>
);

export default ProductDetails;
