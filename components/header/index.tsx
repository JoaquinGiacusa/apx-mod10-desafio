import { useEffect, useState } from "react";
import { Root, NavContainer, HeaderLoginButton } from "./styled";
import { CompraloLogo } from "ui/icons";
import { MenuBurger } from "ui/icons";
import { CloseIcon } from "ui/icons";
import { LinkStyled } from "./styled";
import Link from "next/link";
import { LogStatus } from "ui/logStatus";
import { SearcherHeader } from "./seracher-header-comp";
import { useMe } from "lib/hooks";
import { useRouter } from "next/router";
import { getSaveToken } from "lib/api";

type MainHeaderProps = {
  searcher: boolean;
};

export function MainHeader({ searcher }: MainHeaderProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);

  const router = useRouter();
  const token = getSaveToken();

  if (token) {
    const { data } = useMe();

    useEffect(() => {
      if (!token) {
        setEmail(null);
      } else {
        const email = data?.email;
        setEmail(email);
      }
    }, [data, token]);
  }

  function handleClickBurger() {
    setOpen(true);
  }

  function handleClickCloseIcon() {
    setOpen(false);
  }

  function handleLogin() {
    router.push("/signin");
  }

  function handleLogout() {
    router.push("/logout");
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
        {email ? (
          <span>{email}</span>
        ) : (
          <HeaderLoginButton onClick={handleLogin}>Ingresar</HeaderLoginButton>
        )}
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
              <Link href={"/signin"}>
                <LinkStyled>Ingresar</LinkStyled>
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link href={"/profile"}>
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
            {email && <LogStatus onClick={handleLogout} email={email} />}
          </div>
        </NavContainer>
      )}
    </Root>
  );
}
