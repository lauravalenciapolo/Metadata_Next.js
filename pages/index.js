import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  
  console.log(props.data);

  return (
    <>
      {/* <Head>
        <title>Stalak</title>
        <meta name="description" content={props.data.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image"
        //content="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        content={props.data.image}
        />
        <meta name="og:title" content="Stalak" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}
      <h1>Bienvenidos a Stalak</h1>
    </>
  )
}
