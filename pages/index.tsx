import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
///
import { TitlePage, Large } from "ui/text";
import { TextField } from "ui/textfield";
import { CompraloLogo } from "ui/icons";
import { useRouter } from "next/router";
import { HomeLayout } from "components/layout/home-layout";
import { HomePage } from "components/home-page";
import { SearchItem } from "components/seracher";
import { FeaturedProds } from "components/featured-product";
import { MainLayout } from "components/layout/main-layout";
import { useFeaturedProducts } from "lib/hooks";
import { fetchAPI, fetchAPIFromServer } from "lib/api";

const Home: NextPage = (data: any) => {
  // console.log("page", data.products);

  // const router = useRouter();
  // const { query } = router.query;
  return (
    <div>
      <Head>
        <title>Compralo</title>
        <meta
          name="descripción"
          content="Mi E-commerce creado con Next.js y React.js para dar fin al modulo 10 de la carrera de APX"
        ></meta>
      </Head>
      <HomeLayout>
        <TitlePage>
          El mejor <br></br> e-commerce
        </TitlePage>
        <SearchItem></SearchItem>
        <FeaturedProds products={data.products}></FeaturedProds>
      </HomeLayout>
    </div>
  );
};

export default Home;

// async function pullData(id: string) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
//   const data = await res.json();
//   return data;
// }

export async function getServerSideProps(context: any) {
  // const productId = context.params.id;
  // const data = await pullData(productId as string);
  // const data = await pullData("1" as string);
  // const products = useFeaturedProducts();
  // const BASE_URL = "https://desafio-modulo-9.vercel.app/api";

  // const res = await fetch(BASE_URL + "/search?q=&limit=3&offset=10");
  // const products = await res.json();

  const products = await fetchAPIFromServer("/search?q=&limit=3&offset=10");
  // console.log("products2", products2);

  return {
    props: { products }, // will be passed to the page component as props
  };
}
