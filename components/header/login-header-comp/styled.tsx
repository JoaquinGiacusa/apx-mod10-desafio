import styled from "styled-components";
import { BaseButton } from "ui/button";

export const HeaderButtonStyles = styled(BaseButton)`
  background: var(--rose);
  border: 2px solid var(--rose);
  width: 9em;
`;

export function HeaderButton({ text }: any) {
  return <HeaderButtonStyles>{text}</HeaderButtonStyles>;
}
