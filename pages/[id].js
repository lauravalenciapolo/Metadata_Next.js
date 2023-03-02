import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios'


export async function getServerSideProps(context) {
  const { req, res } = context;
  const {id} = context.query
  const response = await axios.get(`http://34.204.134.151:4000/api/public/posts?post_id=11`);

  const data = response.data;

  return {
    props: {
      data
    }
  }
}

export default function Post(props) {
  console.log(props.data, "holaa");

  return (
    <>
      <Head>
        <title>Stalak</title>
        <meta name="description" content={props.data.data.habit_name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://stalak.com"></meta>
        <meta property="og:image"
        content={props.data.data.image_url}
        />
        <meta name="og:title" content="Stalak" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1>Post id: {props.data.data.id}</h1>
      <h3>Usuario: {props.data.data.user.name}</h3>
      <Image src={props.data.data.image_url} alt={props.data.data.habit_name} width={500} height={500} />
    </>
  )
}