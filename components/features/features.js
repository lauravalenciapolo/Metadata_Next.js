import styles from '@/components/features/features.module.css'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Feature() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className={styles.featureContent} >
      <h1 data-aos="zoom-in" >¿Qué puedo hacer por ti?</h1>
      <div className={styles.content}>
        <div className={styles.cardContent} data-aos="zoom-in">
          <Image src="/Frame_1.png" alt="Stalak" width={320} height={320} className={styles.myImage} />
        </div>
        <div className={styles.cardContent} data-aos="zoom-in">
          <Image src="/Frame_2.png" alt="Stalak" width={320} height={320} className={styles.myImage} />
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.cardContent2} data-aos="zoom-in">
          <p>Ayudo a establecer rutinas saludables que te animan a crear hábitos y mantenerlos</p>
        </div>
        <div className={styles.cardContent2} data-aos="zoom-in">
          <p>Organizo tus actividades en los clubes a los que puedes pertenecer con otras personas</p>
        </div>
        <div className={styles.cardContent2} data-aos="zoom-in">
          <p >Muestro las estadísticas de tus metas para que puedas evaluar tu desempeño y medir tus logros</p>
        </div>
      </div>
    </div>
  )
}


