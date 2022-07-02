import Link from "next/link";
import styled from "styled-components";
import { CompraloLogo } from "ui/icons";
import { MenuBurger } from "ui/icons";
import { BaseButton } from "ui/button";

export const Root = styled.header`
  width: 100%;
  background-color: #000;
  padding: 1em;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 3em auto auto;
  align-items: center;

  .search-item-container {
    grid-column: 1/4;
    justify-self: center;
    width: 100%;
  }
  .menu-burger-container {
    display: grid;
    grid-column: 3;
    justify-self: end;
    align-items: center;
  }

  .login-header-comp {
    display: none;
    color: var(--celeste);
  }

  @media (min-width: 769px) {
    .login-header-comp {
      display: inherit;
      display: grid;
      grid-column: 3;
      justify-self: end;
      align-items: center;
    }
    .menu-burger-container {
      display: none;
    }

    .search-item-container {
      grid-column: 2/3;
      grid-row: 1;
    }
  }
`;

export const NavContainer = styled.nav`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  z-index: 2;

  .closeIcon-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1em;
  }

  .nav-menu {
    padding: 4em 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .log-container {
    text-align: center;
    margin-bottom: 2em;
  }
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2.2em;
  cursor: pointer;
  padding: 10px;

  :hover {
    border: solid 3px white;
    border-radius: 30px;
  }
`;

export const HeaderButtonStyles = styled(BaseButton)`
  background: var(--rose);
  border: 2px solid var(--rose);
  width: 9em;
`;

export function HeaderLoginButton({ onClick, children }: any) {
  return <HeaderButtonStyles onClick={onClick}>{children}</HeaderButtonStyles>;
}
