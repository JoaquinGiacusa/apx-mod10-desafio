import { SubTitle } from "ui/text";
import { Root } from "./styled";
import { Card } from "ui/card";
import { useRouter } from "next/router";

export function FeaturedProds(data: any) {
  const router = useRouter();

  return (
    <Root>
      <div className="title-container">
        <SubTitle>Productos destacados</SubTitle>
      </div>
      <div className="cards-container">
        {data?.products?.results.map((p: any) => {
          return (
            <Card
              onClick={() => {
                router.push("/item/" + p.objectID);
              }}
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
