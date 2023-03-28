import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>Stalak</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <meta property="og:url" content="https://stalak.com"/>
      </Head>
  <Component {...pageProps} />
  </>
  ) 
}
