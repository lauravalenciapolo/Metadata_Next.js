import styles from "@/components/features/features.module.css"
import Image from 'next/image'
import classnames from 'classnames/bind';
import { useEffect } from 'react'

const cx = classnames.bind(styles);

export default function Feature() {

  useEffect(() => {
    const element = document.querySelector(`.${cx('featureContent')}`);
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= 140) {
        element.style.display = "block";
      } else {
        element.style.display = "none";; 
      }
    });
  }, []);

  return (
    <div className={styles.featureContent}>
      <h1>¿Qué puedo hacer por ti?</h1>
      <div className={styles.content}>
        <div className={styles.cardContent}>
          <Image src="/Frame_1.png" alt="Stalak" width={320} height={320} className={styles.myImage} />
        </div>
        <div className={styles.cardContent}>
          <Image src="/Frame_2.png" alt="Stalak" width={320} height={320} className={styles.myImage} />
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.cardContent2}>
          <p>Ayudo a establecer rutinas saludables que te animan a crear hábitos y mantenerlos</p>
        </div>
        <div className={styles.cardContent2}>
          <p>Organizo tus actividades en los clubes a los que puedes pertenecer con otras personas</p>
        </div>
        <div className={styles.cardContent2}>
          <p >Muestro las estadísticas de tus metas para que puedas evaluar tu desempeño y medir tus logros</p>
        </div>
      </div>
    </div>
  )
}