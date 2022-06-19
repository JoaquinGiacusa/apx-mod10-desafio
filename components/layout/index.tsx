import { Footer } from "components/footer";
import { Header } from "components/header";
import { Root, Content } from "./styled";

export function Layout({ children }: any) {
  return (
    <Root>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </Root>
  );
}
