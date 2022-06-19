import Link from "next/link";
// import Head from "next/head";

export default function ProfilePage() {
  return (
    <div>
      {/* <Head>
        <title>Perfil</title>
      </Head> */}
      Soy el perfil
      <Link href={"/"}>Ir al Home</Link>
    </div>
  );
}
