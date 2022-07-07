import { useRouter } from "next/router";
import { LargeBolt, SubTitle } from "ui/text";
import { Root, MessageContainer } from "./styled";

export function Thanks() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <Root>
      <MessageContainer>
        <SubTitle>¡Gracias por su compra!</SubTitle>
        <LargeBolt>
          En 3 segundos será <br></br> redirigido a la página principal.
        </LargeBolt>
      </MessageContainer>
    </Root>
  );
}
