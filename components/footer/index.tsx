import Link from "next/link";
import { BodyText } from "ui/text";
import { Root } from "./styled";
import { InstaLogo } from "ui/icons";
import { TwitterLogo } from "ui/icons";

export function Footer() {
  return (
    <Root>
      <div>
        <nav>
          <ul>
            <li>
              <Link href={"/signin"}>Ingresar</Link>
            </li>
            <li>
              <Link href={"/profile"}>Mi perfil</Link>
            </li>
            <li>
              <Link href={"/"}>Buscar</Link>
            </li>
            <li>
              <Link href={"/logout"}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className={"redes-container"}>
            <h3 className={"redes-title"}>Redes</h3>
            <li>
              <Link href="/">
                <a className={"link-redes"}>
                  <InstaLogo></InstaLogo>
                  <span>My e-commerce</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={"link-redes"}>
                  <TwitterLogo></TwitterLogo>
                  <span>My e-commerce</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright-container">
        <Link href={"https://apx.school"}>
          <a style={{ color: "white" }}>©2022 apx</a>
        </Link>
      </div>
    </Root>
  );
}
