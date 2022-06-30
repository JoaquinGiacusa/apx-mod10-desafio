import { useState } from "react";
import { Root, NavContainer } from "./styled";
import { CompraloLogo } from "ui/icons";
import { MenuBurger } from "ui/icons";
import { CloseIcon } from "ui/icons";
import { LinkStyled, LoginHeader } from "./styled";
import Link from "next/link";
import { LogStatus } from "ui/logStatus";

import { SearcherHeader } from "./seracher-header-comp";

type MainHeaderProps = {
  searcher: boolean;
};

export function MainHeader({ searcher }: MainHeaderProps) {
  const [open, setOpen] = useState(false);

  function handleClickBurger() {
    console.log("abrite");
    setOpen(true);
  }

  function handleClickCloseIcon() {
    setOpen(false);
  }
  return (
    <Root>
      <Link href={"/"}>
        <a>
          <CompraloLogo />
        </a>
      </Link>
      <div className="menu-burger-container">
        <MenuBurger onClick={handleClickBurger}></MenuBurger>
      </div>
      <div className="login-header-comp">
        <LoginHeader></LoginHeader>
      </div>
      {searcher && (
        <div className={"search-item-container"}>
          <SearcherHeader></SearcherHeader>
        </div>
      )}
      {open && (
        <NavContainer>
          <div className={"closeIcon-container"}>
            <CloseIcon onClick={handleClickCloseIcon}></CloseIcon>
          </div>
          <ul className={"nav-menu"}>
            <li className={"nav-item"}>
              <Link href={"/"}>
                <LinkStyled>Ingresar</LinkStyled>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link href={"/"}>
                <LinkStyled>Mi perfil</LinkStyled>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link href={"/"}>
                <LinkStyled>Buscar</LinkStyled>
              </Link>
            </li>
          </ul>
          <div className={"log-container"}>
            <LogStatus
              onClick={() => console.log("cerrar sesion")}
              email={"giacusajoaquin.@gmail.com"}
            />
          </div>
        </NavContainer>
      )}
    </Root>
  );
}
