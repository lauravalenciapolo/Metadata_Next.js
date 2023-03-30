import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Head>
  <title>Stalak</title>
  <meta charSet="utf-8" />
  <meta name="description" content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."/>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/Group_5.png" />
  <meta property="og:image"
  content="/stalak_logo.png"
  />
  <meta name="og:title" content="Stalak" />
  <meta property="og:url" content="https://stalak.com"></meta>
</Head>
  </>
  ) 
}
