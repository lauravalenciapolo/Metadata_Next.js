import Image from "next/image";
import styles from "@/components/header/header.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from "next/link";

export default function Header() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className={styles.header} data-aos="fade-up">
      <div className={styles.subheader}>
        <h1 className={styles.title}>Stalak, una red social para lograr hábitos</h1>
        <p>Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida.</p>
        <div className={styles.containerButtons}>
          <button>Descargar Stalak</button>
          <div className={styles.containerButtonsImage}>
            <Link href={'https://play.google.com/store/apps/details?id=app.stalakapp&hl=en-US&ah=tghTXuXLnpRVDus5JsPEOWknNqw'}>
              <Image src="/android_1.png" alt="Stalak android" width={198.95} height={60} className={styles.app} />
            </Link>
            <Link href={'https://testflight.apple.com/v1/app/1638320785?build=96408600'}>
              <Image src="/index_1.png" alt="Stalak ios" width={182.59} height={61.55} className={styles.app} />
            </Link>
          </div>
        </div>
      </div>
      <Image src="/celularLanding.png" alt="Stalak phone"
        width={433.08}
        height={650}
        className={styles.phone} />
    </div>
  )
}