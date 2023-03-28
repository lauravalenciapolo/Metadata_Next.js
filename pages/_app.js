import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>Stalak</title>
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <meta
          name="description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/Group_5.png" />
        <meta property="og:image" itemprop="image" content="/Group_5.png" />
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:height" content="300" />
        <meta property="og:image:width" content="300" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content="Stalak - app" />
      </Head>
  <Component {...pageProps} />
  </>
  ) 
}
