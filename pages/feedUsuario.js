import NavBar from '@/components/navbar/navbar';
import styles from '@/styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link'

// export async function getServerSideProps(context) {
//   const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token-usuario1\s*=\s*([^;]*).*$)|^.*$/, "$1");
//   console.log(cookieValue); 
//   const headers = {
//     'stalak-token': '',
//   };
//   const response = await axios.get(`http://localhost:4000/api/social/user/feed`, { headers });
//   const data = response.data;
//   return {
//     props: {
//       data
//     }
//   }
// }
export default function FeedUsuario() { 

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}