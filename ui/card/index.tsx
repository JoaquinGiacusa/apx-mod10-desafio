import { wrap } from "module";
import styled from "styled-components";
import { Large, LargeBolt } from "ui/text";
import { FlechaCard } from "ui/icons";

export const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: 15em;

  /* border: solid 8px white; */
`;

type CardPropTypes = {
  name: string;
  price: number;
  imageURL: string;
  imageDescription: string;
};

const CardContainer = styled.div`
  width: 16em;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  &:hover {
    transition: all 0.1s ease-in-out;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.4);

    ${FlechaCard} {
      visibility: visible;
      transform: translateX(+25%);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export function Card({
  name,
  price,
  imageURL,
  imageDescription = "descripcion de cada img",
}: CardPropTypes) {
  return (
    <CardContainer>
      <div>
        <ProductImage src={imageURL} alt={imageDescription} />
        <div
          style={{
            padding: "0.5em",
            position: "relative",
            backgroundColor: "var(--celeste)",
            textAlign: "start",
          }}
        >
          <Large>{name}</Large>
          <LargeBolt style={{ margin: "0", color: "black" }}>
            ${price}
          </LargeBolt>
          <div
            style={{
              position: "absolute",
              right: "2em",
              top: "55%",
              marginTop: "-1em",
              width: "2em",
              height: "2em",
            }}
          >
            <FlechaCard></FlechaCard>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
