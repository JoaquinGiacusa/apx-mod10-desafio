import styled from "styled-components";

export const Root = styled.section`
  width: 100%;
  /* text-align: center; */
  background-color: #e7e7e7;
  padding: 2em;

  .cards-container {
    display: grid;
    gap: 30px;
    width: 100%;
    /* margin: 0 auto; */
  }

  .title-container {
    width: 20em;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 769px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
    .title-container {
      width: 40em;
    }
  }

  @media (min-width: 969px) {
    .cards-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
