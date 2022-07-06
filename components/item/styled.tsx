import styled from "styled-components";

export const Root = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-product {
    width: 100%;
    max-width: 30em;
    max-height: 20em;
  }

  .text-container {
    min-width: 15em;
    max-width: 30em;
    display: flex;
    flex-direction: column;
  }

  .price {
    margin-bottom: 0.5em;
  }

  @media (min-width: 900px) {
    margin: 5em;
    flex-direction: row;
    align-items: flex-start;

    .product-name {
      margin: 0;
    }

    .price {
      margin-top: 1em;
    }

    .image-product {
      margin-right: 3em;
      width: 100%;
      max-width: 30em;
      height: 500px;
    }
  }
`;
