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

const Home: NextPage = () => {
  const router = useRouter();
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
        <FeaturedProds></FeaturedProds>
      </HomeLayout>
    </div>
  );
};

export default Home;
