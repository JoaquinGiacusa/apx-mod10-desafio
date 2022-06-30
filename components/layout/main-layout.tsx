import { Footer } from "components/footer";
import { MainHeader } from "components/header";
import { ReactElement } from "react";
import { Root, Content } from "./styled";

type PropsMainLayout = {
  searcher?: boolean;
  children: any;
};

export function MainLayout({ searcher = false, children }: PropsMainLayout) {
  return (
    <Root>
      <MainHeader searcher={searcher}></MainHeader>
      <Content>{children}</Content>
      <Footer></Footer>
    </Root>
  );
}
