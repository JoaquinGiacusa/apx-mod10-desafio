import type { NextPage } from "next";
import Head from "next/head";
import { TitlePage } from "ui/text";
import { MainLayout } from "components/layout/main-layout";
import { SearchItem } from "components/seracher";
import { FeaturedProds } from "components/featured-product";
import { fetchAPIFromServer } from "lib/api";

const Home: NextPage = (data: any) => {
  return (
    <div>
      <Head>
        <title>Compralo</title>
        <meta
          name="description"
          content="Mi E-commerce creado con Next.js y React.js para dar fin al modulo 10 de la carrera de APX"
        ></meta>
      </Head>
      <MainLayout>
        <TitlePage>
          El mejor <br></br> e-commerce
        </TitlePage>
        <SearchItem></SearchItem>
        <FeaturedProds products={data.products}></FeaturedProds>
      </MainLayout>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const products = await fetchAPIFromServer("/search?q=&limit=4&offset=10");

  return {
    props: { products }, // will be passed to the page component as props
  };
}
