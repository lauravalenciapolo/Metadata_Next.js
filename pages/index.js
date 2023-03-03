import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import NavBar from '@/components/navbar/navbar';
import Header from '@/components/header/header';


export default function Home() {

  return (
    <div className={styles.content}>
      <NavBar/>
      <Header/>
      <div> 
        <h1>¿Qué puedo hacer por ti?</h1>
      </div>
    </div>
  )
}
