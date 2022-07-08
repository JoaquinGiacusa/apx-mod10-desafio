import { ServerStyleSheet } from "styled-components";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
} from "next/document";
import { Fragment } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <Fragment key={"1"}>
            <Html lang="es">
              <link rel="icon" href="/cartIcon.svg" />
            </Html>

            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
