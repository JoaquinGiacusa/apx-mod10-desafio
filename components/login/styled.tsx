import styled from "styled-components";
import { FormBase } from "ui/form";
import { Tiny } from "ui/text";

export const Root = styled.section`
  /* margin: 0 auto;
  padding: 1em; */
  height: 25em;
`;

export const FormLogin = styled(FormBase)`
  .label {
    margin: 0;
  }

  .input {
    text-align: center;
  }

  .text-msj {
    margin: 0;
    margin-bottom: 0.5em;
  }
`;

export const ErrorForm = styled(Tiny)`
  width: 100%;
  text-align: center;
  color: red;
  margin: 0;
`;
