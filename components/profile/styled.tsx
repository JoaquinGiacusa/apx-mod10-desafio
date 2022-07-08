import styled from "styled-components";
import { FormBase } from "ui/form";
import { Tiny } from "ui/text";

export const Root = styled.section``;

export const FormProfile = styled(FormBase)`
  .input {
    text-align: center;
  }

  .button {
    margin-top: 1em;
  }
`;

export const ErrorForm = styled(Tiny)`
  width: 100%;
  text-align: center;
  color: red;
  margin: 0;
`;
