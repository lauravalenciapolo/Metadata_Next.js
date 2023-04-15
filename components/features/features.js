import styles from "@/components/features/features.module.css"
import Image from 'next/image'
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react'

const cx = classnames.bind(styles);


export default function Feature() {

  // const [elementoMostrado, setElementoMostrado] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     const elemento = document.querySelector(`.${cx('featureContent')}`);
  //     if (elemento) {
  //       const rect = elemento.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         setElementoMostrado(true);
  //         elemento.style.display = 'block'
  //       }
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [elementoMostrado]);

  useEffect(() => {
  // window.addEventListener('scroll', function () {
  //   const element = document.querySelector(`.${cx('featureContent')}`);
  //   const rect = element.getBoundingClientRect();
  //   // Obtiene la posición del elemento
  //   // Si el element está en la vista del usuario, muéstralo
  //   if (rect.top >= 0 && rect.bottom <= window.innerHeight && !elementoMostrado) {
  //     element.style.display = 'block';
  //     elementoMostrado = true;
  //   }
  //   else {
  //     // De lo contrario, ocúltalo
  //     element.style.display = 'none';
  //   }
  // })

  window.addEventListener('scroll', () => {
    const element = document.querySelector(`.${cx('featureContent')}`);
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    if (documentHeight - (scrollPosition + windowHeight) == 0) {
      element.style.display = "block"
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


// window.addEventListener('scroll', function() {
//   // Altura total de la página, incluyendo el área oculta
//   var documentHeight = document.documentElement.scrollHeight;

//   // Altura visible de la ventana del navegador
//   var windowHeight = window.innerHeight;

//   // Posición actual del scroll
//   var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

//   // Si el scroll llega al final de la página
//   if (documentHeight - (scrollPosition + windowHeight) < 1) {
//     console.log('Has llegado al final de la página!');
//     // Aquí puedes llamar a una función o realizar alguna acción
//   }
// })