import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
///
import StyledLink from "ui/link";
import { TitlePage, Large } from "ui/text";
import { TextField } from "ui/textfield";
import { CompraloLogo } from "ui/icons";
import { useRouter } from "next/router";
import { Layout } from "components/layout";
import { HomePage } from "components/home-page";
import { SearchItem } from "components/seracher";
import { FeaturedProds } from "components/featured-product";

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
      <Layout>
        <TitlePage>
          El mejor <br></br> e-commerce
        </TitlePage>
        <SearchItem></SearchItem>
        <FeaturedProds></FeaturedProds>
      </Layout>
    </div>
  );
};

export default Home;

/* <HomePage query={q}></HomePage> */
/* <CompraloLogo></CompraloLogo>
<StyledLink href={"/profile"}>Ir hace profile</StyledLink>
<TitlePage>Soy el titulo de la pagina</TitlePage>
<SectionTitle>SectionTitle</SectionTitle>
<SubTitle>Soy el SUBTITULO de la pagina</SubTitle>
<H2>H2 ?</H2>
<SubtitleH3>Holaa h3 xd</SubtitleH3>
<TextField label={"Nombre"}></TextField>
<Large>Mancuerna de 20KG large</Large>
<Card
  name="Ventilador "
  price={3424}
  imageURL={
    "https://www.65ymas.com/uploads/s1/75/76/13/bigstock-square-decorative-wood-beam-wi-371581240.jpeg"
  }
  imageDescription={""}
></Card> */
