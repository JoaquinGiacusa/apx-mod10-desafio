import styled from "styled-components";

type PrimatyButtonProps = {
  text: string;
};

export const BaseButton = styled.button`
  font-size: 1.2em;
  width: 15em;
  margin: 0px;
  color: black;
  cursor: pointer;
  padding: 0.25em 1em;
  background-color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 5px;
  :hover {
    border: 2px solid black;
  }
`;

export function PrimaryButton({ text }: PrimatyButtonProps) {
  return <BaseButton>{text}</BaseButton>;
}

export const SecondaryButton = styled(BaseButton)`
  background: palevioletred;
`;
