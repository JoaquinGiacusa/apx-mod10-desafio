import styled from "styled-components";
import logoCompralo from "./logoCompralo.svg";
import flechaCard from "./flechaCard.svg";
import menuBurger from "./menuBurger.svg";
import xClose from "./x-close.svg";
import intaLogo from "./instagram.svg";
import twitterLogo from "./twitter.svg";

export const CompraloLogo = styled(logoCompralo)`
  cursor: pointer;
`;

export const FlechaCard = styled(flechaCard)`
  visibility: hidden;
  cursor: pointer;
`;

export const MenuBurgerIcon = styled(menuBurger)`
  cursor: pointer;
`;

export function MenuBurger({ onClick }: any) {
  return <MenuBurgerIcon onClick={onClick}></MenuBurgerIcon>;
}

export const CloseIcon = styled(xClose)`
  cursor: pointer;
`;

export const InstaLogo = styled(intaLogo)`
  cursor: pointer;
`;

export const TwitterLogo = styled(twitterLogo)`
  cursor: pointer;
`;
