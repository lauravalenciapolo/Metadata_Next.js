import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Stalak</title>
        <meta
          name="description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Group_5.png" />
        <meta property="og:image" content="/stalak_logo.png" />
        <meta name="og:title" content="Stalak" />
        <meta property="og:url" content="https://stalak.com"></meta>
      </Head>
      <body style={{ backgroundColor: "#F8F9FF" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
