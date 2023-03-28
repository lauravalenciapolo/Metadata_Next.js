import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:url" content="https://stalak.com"/>
        <meta name="title" property="og:title" content="Stalak - app"></meta>
        <meta
          property="og:description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <meta
          name="description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <link rel="icon" href="/Group_5.png" />
        {/* <meta property="og:image" itemprop="image" content="https://og-image.xyz/og/Stalak/stalak/og-image.xyz/https/menlo/irritablehero/black/data.png" /> */}
        <meta property="og:image" itemprop="image" content="Group_55.png" />
        <meta property="og:image:type" content="image/png"></meta>
        {/* <meta property="og:image:height" content="1000" />
        <meta property="og:image:width" content="1000" /> */}
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Habitos, Habits, app, red social"/>
        <meta name="twitter:title" content="Stalak - app" />
        <meta name="twitter:description" content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida." />
        <meta name="twitter:image" content="/Group_5.png" />
      </Head>
      <body style={{ backgroundColor: "#F8F9FF" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
