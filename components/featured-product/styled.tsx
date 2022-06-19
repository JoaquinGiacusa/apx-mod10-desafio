import styled from "styled-components";

export const Root = styled.section`
  padding: 3em;
  width: 100%;
  text-align: center;
  background-color: #e7e7e7;

  .cards-container {
    display: grid;
    gap: 30px;
  }

  .title-container {
    width: 20em;
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    .cards-container {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0 6em;
      width: 100%;
    }
  }
`;
