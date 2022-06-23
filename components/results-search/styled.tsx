import styled from "styled-components";

export const Root = styled.section`
  margin: 2em 0;

  .results-counter {
    margin: 0 2em;
  }
`;

export const ResultsContainer = styled.div`
  display: grid;
  gap: 2em;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
