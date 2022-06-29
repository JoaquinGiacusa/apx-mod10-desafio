import styled from "styled-components";

export const Root = styled.section`
  margin: 2em 0;
  min-height: 420px;
`;

export const ResultsContainer = styled.div`
  display: grid;
  gap: 2em;
  justify-content: center;

  .results-counter {
    margin: 0;
    grid-column: 1;
  }

  .navegation-container {
    /* grid-row: 6; */
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    grid-template-columns: auto auto;

    .results-counter {
      grid-column: 1/3;
    }

    .view-more-results {
      grid-column: 1/3;
    }

    .navegation-container {
      grid-column: 1/3;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
    .results-counter {
      grid-column: 1/5;
    }

    .view-more-results {
      grid-column: 1/5;
    }

    .navegation-container {
      grid-column: 1/5;
    }
  }
`;

export const NavegationButton = styled.button`
  font-size: 1em;
  border: solid 2px black;
  border-radius: 4px;
  width: 7em;
  cursor: pointer;
  margin: 0 0.8em;
  background-color: white;

  :hover {
    border: solid 2px white;
  }
`;
