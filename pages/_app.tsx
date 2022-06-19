import type { AppProps } from "next/app";
import "../styles/globals.css";

//lo de aca se evalua en cada pagina

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
