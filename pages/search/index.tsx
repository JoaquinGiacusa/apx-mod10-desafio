import { MainLayout } from "components/layout/main-layout";
import { useRouter } from "next/router";
import { ResultSearchItems } from "components/results-search";

export default function SearchPage() {
  const router = useRouter();
  const { query } = router;
  const search = query.q;
  const limit = query.limit;
  const offset = query.offset;

  return (
    <MainLayout>
      <ResultSearchItems
        query={search}
        limit={limit}
        offset={offset}
      ></ResultSearchItems>
    </MainLayout>
  );
}

// export async function getServerSideProps(context: any) {
//   // const productId = context.params.id;
//   // const data = await pullData(productId as string);
//   // const data = await pullData("1" as string);
//   // const products = useFeaturedProducts();
//   // const BASE_URL = "https://desafio-modulo-9.vercel.app/api";

//   // const res = await fetch(BASE_URL + "/search?q=&limit=3&offset=10");
//   // const products = await res.json();

//   const products = await fetchAPIFromServer("/search?q=&limit=3&offset=10");
//   // console.log("products2", products2);

//   return {
//     props: { products }, // will be passed to the page component as props
//   };
