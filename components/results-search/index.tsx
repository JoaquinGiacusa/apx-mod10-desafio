import { useSerachResult } from "lib/hooks";
import Link from "next/link";
import { Card } from "ui/card";
import { BodyText, Large, LargeBolt } from "ui/text";
import { ResultsContainer, Root } from "./styled";

export function ResultSearchItems({ query, offset, limit }: any) {
  const products = useSerachResult(query, offset, limit);

  console.log(products);

  return (
    <Root>
      {products?.results?.length > 0 ? (
        <ResultsContainer>
          <LargeBolt className="results-counter">
            Resultados: {products?.results?.length} de{" "}
            {products?.pagination.total}
          </LargeBolt>
          {products?.results.map((p: any) => {
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
          <Link href={"/search?q=" + query + "&limit=1&offset=0"}>
            <a>siguiente pagina</a>
          </Link>
        </ResultsContainer>
      ) : (
        <LargeBolt>
          No hay publicaciones que coincidan con tu búsqueda.
        </LargeBolt>
      )}
    </Root>
  );
}
