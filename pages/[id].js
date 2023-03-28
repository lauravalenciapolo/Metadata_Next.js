import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import PostCard from '@/components/post'


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

  return (
    <>
      <Head>
        <title>Stalak</title>
        <meta name="description" content={props.data.data.habit_name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://stalak.com"></meta>
        <link rel="icon" href="/Group_5.png" />
        <meta property="og:image"
        content={props.data.data.image_url}
        />
        <meta name="og:title" content="Stalak" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PostCard props={props.data}/>
    </>
  )
}