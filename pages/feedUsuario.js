import NavBar from '@/components/navbar/navbar';
import styles from '@/styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const headers = {
    Authorization: '',
  };
  const response = await axios.get(`http://34.204.134.151:4000/api/social/user/feed`, { headers });
  const data = response.data;
  return {
    props: {
      data
    }
  }
}
export default function FeedUsuario() { 

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}