import styled from "styled-components";

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  max-width: 769px;
  margin: 0 auto;
  margin-top: 1em;

  .buton-search-container {
    width: 100%;
  }

  .mobile {
    margin: 100px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 0 auto;

    .buton-search-container {
      width: 8em;
    }
  }
`;

// export function SearcherHeader({}){
//   return <FormBase style={{}}></FormBase>
// }
