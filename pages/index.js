import styles from '@/styles/Home.module.css'
import NavBar from '@/components/navbar/navbar';
import Header from '@/components/header/header';
import Feature from '@/components/features/features';
import Metrics from '@/components/metrics/metrics';
import CallToAction from '@/components/callToAction/callToAction';
import Footer from '@/components/footer/footer';
import Head from 'next/head';

export default function Home() {

  return (
    <div className={styles.content}>
      <Head>
        <title>Stalak</title>
        <meta charSet="utf-8" />
        <meta name="title" property="og:title" content="Stalak - app"></meta>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/Group_5.png" />
        <meta
          property="og:description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        <meta
          name="description"
          content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida."
        />
        {/* <meta property="og:image" itemprop="image" content="https://og-image.xyz/og/Stalak/stalak/og-image.xyz/https/menlo/irritablehero/black/data.png" /> */}
        <meta property="og:image" itemProp="image" content="Group_1.png"/>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:type" content="website" />
        <meta name="og:title" content="Stalak - app" />
        <meta name="twitter:title" content="Stalak - app" />
        <meta name="twitter:description" content="Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida." />
        <meta name="twitter:image" content="/Group_5.png" />
      </Head>
      <NavBar />
      <Header />
      <Feature />
      <Metrics />
      <CallToAction />
      <Footer />
    </div>
  );
}
