import { useProduct } from "lib/hooks";
import { Root } from "./styled";
import Image from "next/image";
import { BodyText, PriceText, SubTitle, TitlePage } from "ui/text";
import { BuyButton } from "ui/button";

export function Item({ itemId }: any) {
  const data = useProduct(itemId);
  console.log(data);
  const imageUrl = data?.Images[0].url;
  console.log(imageUrl);

  return (
    <Root>
      {/* <div className="image-container"> */}
      <img className="image-product" src={imageUrl}></img>
      {/* </div> */}
      <div className="text-container">
        <SubTitle className="product-name">{data?.Name}</SubTitle>
        <PriceText className="price">${data?.["Unit cost"]}</PriceText>
        <BuyButton>Comprar</BuyButton>
        <BodyText>{data?.Description}</BodyText>
      </div>
    </Root>
  );
}
