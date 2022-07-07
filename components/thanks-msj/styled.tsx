import styled from "styled-components";

export const Root = styled.div`
  background-color: var(--gray);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MessageContainer = styled.div`
  width: 20em;
  height: 20em;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  padding: 3em;

  @media (min-width: 769px) {
    width: 30em;
  }
`;
