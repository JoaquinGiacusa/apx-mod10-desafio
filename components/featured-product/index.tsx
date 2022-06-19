import { SubTitle } from "ui/text";
import { Root } from "./styled";
import { Card } from "ui/card";

export function FeaturedProds() {
  return (
    <Root>
      <div className="title-container">
        <SubTitle>Productos destacados</SubTitle>
      </div>
      <div className="cards-container">
        <Card
          name="ventilador de techo"
          price={3421}
          imageURL="https://www.65ymas.com/uploads/s1/75/76/13/bigstock-square-decorative-wood-beam-wi-371581240.jpeg"
          imageDescription="el mejor venilador"
        ></Card>
        <Card
          name="ventilador de techo"
          price={3421}
          imageURL="https://www.65ymas.com/uploads/s1/75/76/13/bigstock-square-decorative-wood-beam-wi-371581240.jpeg"
          imageDescription="el mejor venilador"
        ></Card>
      </div>
    </Root>
  );
}
