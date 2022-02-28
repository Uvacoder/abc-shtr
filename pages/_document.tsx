import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Inter:wght@900&display=swap"
            rel="stylesheet"
          />
          {/* og image, title, description */}
          <meta
            property="og:image"
            content="https://shtr.tk/static/images/og.png"
          />
          <meta property="og:title" content="Shtr" />
          <meta
            property="og:description"
            content="The powerful, opensource and free url shortner"
          />
          {/* twitter meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ChapagainAshik" />
          <meta name="twitter:title" content="Shtr" />
          <meta
            name="twitter:description"
            content="The powerful, opensource and free url shortner"
          />
          <meta
            name="twitter:image"
            content="https://shtr.tk/static/images/og.png"
          />
        </Head>
        <body className="bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
