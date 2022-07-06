import styled from "styled-components";

export const Root = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  @media (min-width: 769px) {
    margin: 5em;
    flex-direction: row;
  }

  .image-container {
    width: 100%;
  }

  .image-product {
    margin: 0 auto;
    width: 100%;
    max-width: 35em;
    height: 15em;
  }

  .text-container {
    max-width: 40em;
    display: flex;
    flex-direction: column;
  }

  .price {
    margin-bottom: 0.5em;
  }

  .description {
  }
`;
