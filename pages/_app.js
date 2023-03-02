import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Head>
  <title>Stalak</title>
  {/* <meta name="description" content="App de Habitos" /> */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/stalak_logo.png" />
  <meta property="og:image"
  content="/stalak_logo.png"
  />
  <meta property="og:url" content="https://stalak.com"></meta>
  <meta name="og:title" content="Stalak" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>
  </>
  )
  //Puedo pasarle aquí mis head para que cualquier ruta que se comparta tenga esta info 
}
