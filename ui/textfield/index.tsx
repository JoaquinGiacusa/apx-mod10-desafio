import styled from "styled-components";
import { Tiny } from "ui/text";

export const InputWhite = styled.input`
  width: 100%;
  font-size: 1.2em;
  border: solid 3px black;
  border-radius: 5px;
  padding: 3px;
`;

export const HeaderInput = styled(InputWhite)`
  border: solid 3px white;
  background-color: white;
  color: black;
`;

export const Label = styled(Tiny)`
  margin: 0;
  width: 100%;
`;

export function TextField({ label, placeholder = "completar..." }: any) {
  return (
    <div>
      <Label>{label}</Label>
      <InputWhite placeholder={placeholder}></InputWhite>
    </div>
  );
}
