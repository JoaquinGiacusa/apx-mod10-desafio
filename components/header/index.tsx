import { useState } from "react";
import { Root, NavContainer } from "./styled";
import { CompraloLogo } from "ui/icons";
import { MenuBurger } from "ui/icons";
import { CloseIcon } from "ui/icons";
import { LinkA } from "./styled";
import Link from "next/link";
import { LogStatus } from "ui/logStatus";

export function Header() {
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
      <CompraloLogo></CompraloLogo>
      <MenuBurger onClick={handleClickBurger}></MenuBurger>
      {open && (
        <NavContainer>
          <div className={"closeIcon-container"}>
            <CloseIcon onClick={handleClickCloseIcon}></CloseIcon>
          </div>
          <ul className={"nav-menu"}>
            <li className={"nav-item"}>
              <Link href={"#"}>
                <LinkA>Ingresar</LinkA>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link href={"#"}>
                <LinkA>Mi perfil</LinkA>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link href={"#"}>
                <LinkA>Buscar</LinkA>
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
