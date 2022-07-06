import styled from "styled-components";

type PrimatyButtonProps = {
  text: string;
};

export const BaseButton = styled.button`
  font-size: 1.2em;
  width: 100%;
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

export const SecondaryBtnStyles = styled(BaseButton)`
  background: #ffc700;
  border: 2px solid #ffc700;
`;

export function SecondaryButton({ text, className }: any) {
  return <SecondaryBtnStyles className={className}>{text}</SecondaryBtnStyles>;
}

export function BuyButton({ children }: any) {
  return (
    <BaseButton style={{ maxWidth: "15em", fontSize: "1.5em" }}>
      {children}
    </BaseButton>
  );
}
