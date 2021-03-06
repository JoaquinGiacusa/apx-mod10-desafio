import { useSerachResult } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card } from "ui/card";
import { LargeBolt } from "ui/text";
import { ResultsContainer, Root, NavegationButton } from "./styled";

export function ResultSearchItems({ query }: any) {
  const router = useRouter();
  const { data, isValidating, offset, setOffset } = useSerachResult(query);
  const [products, setProducts]: any = useState(null);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  function handleNextPage() {
    setOffset(offset + 4);
  }

  function handlePreviousPage() {
    setOffset(offset - 4);
  }

  return (
    <Root>
      {data && (
        <div>
          {products?.results?.length > 0 ? (
            <ResultsContainer>
              <LargeBolt className="results-counter">
                Resultados: {offset}-{products?.results?.length + offset} de{" "}
                {products?.pagination.total}
              </LargeBolt>
              {products?.results.map((p: any) => {
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
              <div className="navegation-container">
                {offset >= 4 && (
                  <NavegationButton onClick={handlePreviousPage}>
                    página anterior
                  </NavegationButton>
                )}
                {offset + 4 < products?.pagination?.total && (
                  <NavegationButton onClick={handleNextPage}>
                    página siguiente
                  </NavegationButton>
                )}
              </div>
            </ResultsContainer>
          ) : (
            <LargeBolt className="no-results">
              No hay publicaciones que coincidan con tu búsqueda.
            </LargeBolt>
          )}
        </div>
      )}
    </Root>
  );
}
