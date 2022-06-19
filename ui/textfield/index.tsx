import styled from "styled-components";
import { Tiny } from "ui/text";

export const InputStyled = styled.input`
  width: 15em;
  font-size: 1.2em;
  border: solid 3px black;
  border-radius: 5px;
  padding: 3px;
`;

export const Label = styled(Tiny)`
  margin-bottom: 5px;
`;

export function TextField({ label, placeholder = "completar..." }: any) {
  return (
    <label>
      <Label>{label}</Label>
      <InputStyled placeholder={placeholder}></InputStyled>
    </label>
  );
}
