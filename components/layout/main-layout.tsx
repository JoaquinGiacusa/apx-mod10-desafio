import { Footer } from "components/footer";
import { MainHeader } from "components/header";
import { Root, Content } from "./styled";

export function MainLayout({ searcher, children }: any) {
  return (
    <Root>
      <MainHeader></MainHeader>
      <Content>{children}</Content>
      <Footer></Footer>
    </Root>
  );
}
