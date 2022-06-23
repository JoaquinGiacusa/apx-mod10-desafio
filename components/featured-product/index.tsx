import { SubTitle } from "ui/text";
import { Root } from "./styled";
import { Card } from "ui/card";
import { useFeaturedProducts } from "lib/hooks";

export function FeaturedProds(data: any) {
  // const products = useFeaturedProducts();
  // console.log("xd", data);

  return (
    <Root>
      <div className="title-container">
        <SubTitle>Productos destacados</SubTitle>
      </div>
      <div className="cards-container">
        {data?.products?.results.map((p: any) => {
          // console.log(p);
          return (
            <Card
              key={p.objectID}
              name={p.Name}
              price={p["Unit cost"]}
              imageURL={p.Images[0].url}
              imageDescription={p.Description}
            ></Card>
          );
        })}
      </div>
    </Root>
  );
}
