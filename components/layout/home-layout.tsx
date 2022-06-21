import { Footer } from "components/footer";
import { HomeHeader } from "components/header/home-header";
import { Root, Content } from "./styled";

export function HomeLayout({ children }: any) {
  return (
    <Root>
      <HomeHeader></HomeHeader>
      <Content>{children}</Content>
      <Footer></Footer>
    </Root>
  );
}
