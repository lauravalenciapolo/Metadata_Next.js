import Image from "next/image"
import styles from "@/components/header/header.module.css"

export default function Header() {

    return (
        <div className={styles.header}> 
        <div className={styles.subheader}>
          <h1 className={styles.title}>Stalak, una red social para lograr hábitos</h1>
          <p>Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida.</p>
          <div className={styles.containerButtons}>
            <button>Descargar Stalak</button>
            <Image src="/android_1.png" alt="Stalak android" width={198.95} height={60} className={styles.app} />
            <Image src="/index_1.png" alt="Stalak ios" width={182.59} height={61.55} className={styles.app}/>
          </div>       
        </div>
          <Image src="/Rectangle1.png" alt="Stalak phone" 
          width={333.08} 
          height={550} 
          className={styles.phone}/>
        </div>
    )
  }