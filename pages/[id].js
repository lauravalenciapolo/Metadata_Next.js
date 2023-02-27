import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context) {
  const { req, res } = context;
  const {id} = context.params

  // Fetch data from your service using req and res
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  // Extract the data from the response
  const data = response.data;

  // Return the data as props
  return {
    props: {
      data
    }
  }
}

export default function Post(props) {
  console.log(props.data);

  return (
    <>
      <Head>
        <title>Stalak</title>
        <meta name="description" content={props.data.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://stalak.com"></meta>
        <meta property="og:image"
        content={props.data.image}
        />
        <meta name="og:title" content="Stalak" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1>Post id: {props.data.id}</h1>
      <h3>Usuario: {props.data.name}</h3>
    </>
  )
}