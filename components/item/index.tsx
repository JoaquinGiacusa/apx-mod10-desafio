import { useProduct } from "lib/hooks";
import { Root } from "./styled";

import { BodyText, PriceText, SubTitle, TitlePage } from "ui/text";
import { BuyButton } from "ui/button";
import { useRouter } from "next/router";

export function Item({ itemId }: any) {
  const router = useRouter();
  const data = useProduct(itemId);

  const imageUrl = data?.Images[0].url;

  function handleBuy() {
    router.push("/checkout/" + itemId);
  }

  return (
    <Root>
      {/* <div className="image-container"> */}
      <img className="image-product" src={imageUrl}></img>
      {/* </div> */}
      <div className="text-container">
        <SubTitle className="product-name">{data?.Name}</SubTitle>
        <PriceText className="price">${data?.["Unit cost"]}</PriceText>
        <BuyButton onClick={handleBuy}>Comprar</BuyButton>
        <BodyText>{data?.Description}</BodyText>
      </div>
    </Root>
  );
}
