import styles from '@/components/metrics/metrics.module.css'
import Image from 'next/image'
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react'

const cx = classnames.bind(styles);

export default function Metrics() {

    // const [elementoMostrado, setElementoMostrado] = useState(false);

    // useEffect(() => {
    //     function handleScroll() {
    //         const elemento = document.querySelector(`.${cx('generalDiv')}`);
    //         if (elemento) {
    //             const rect = elemento.getBoundingClientRect();
    //             if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //                 setElementoMostrado(true);
    //                 elemento.style.display = 'block'
    //             }
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [elementoMostrado]);


    useEffect(() => {
        const element = document.querySelector(`.${cx('generalDiv')}`);
        window.addEventListener('scroll', () => {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

            if (documentHeight - (scrollPosition + windowHeight) == 0) {
                element.style.display = "block"
            }
        });
    }, []);


    return (
        <div className={styles.generalDiv}>
            <div className={styles.contentTitle}>
                <h1>Quiero ayudarte a crear hábitos saludables que te impulsen a alcanzar tus objetivos</h1>
            </div>
            <div className={styles.contentInfo}>
                <Image src="/Visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage} />
                <div className={styles.parrag}>
                    <p>Te ayudo a compartir tus hábitos saludables con tus amigos y conocidos, así aprendes de las experiencias de otros y construyes una comunidad parecida a ti</p>
                </div>
            </div>
            <div className={styles.contentInfo2}>
                <div className={styles.parrag}>
                    <p>Soy una red social en la que puedes conocer nuevas personas a partir de un gusto común, además puedes unirte a los clubes y practicar tus actividades favoritas</p>
                </div>
                <Image src="/Visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage2} />
            </div>
            <div className={styles.contentInfo} >
                <Image src="/Visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage} />
                <div className={styles.parrag}>
                    <p>Conecta con personas en diferentes lugares para planificar y ejecutar actividades en común que te hagan feliz y te ayuden a llevar una vida saludable</p>
                </div>
            </div>
        </div>

    )
};