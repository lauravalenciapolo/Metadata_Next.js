import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { FaShare } from "react-icons/fa";

export default function Home() {

  return (
    <>
      <div className={styles.navbar}>
      <Image src="/stalak_logo.png" alt="Stalak" className={styles.myImage}     
      width={87.57} height={85.95} />
      <p>Stalak</p>
      </div>

      <div className={styles.container}>
        {/* <FaShare/><p>Compartir</p> */}
        <p>Stalak, una app para lograr hábitos</p>
        <p>Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida.</p>
        <button>Descargar Stalak</button>
        
      </div>
    </>
  )
}
