import styled from "styled-components";

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  max-width: 30em;
  padding: 1em;
  margin: 2em auto;

  @media (min-width: 769px) {
    /* flex-direction: row; */
  }
`;
