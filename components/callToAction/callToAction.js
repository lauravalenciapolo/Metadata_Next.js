import styles from '@/components/callToAction/callToAction.module.css'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function CallToAction() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className={styles.conteiner} data-aos="fade-up">
        <div className={styles.blueconteiner}>
            <div>
                <p>Empecemos a organizar tus hábitos y convertirlos en propósitos de vida</p>
                <button>Descargar Stalak</button>
            </div>
            <Image src="/celularLanding.png" alt="Stalak phone" width={433.08} height={650} className={styles.phone} />
        </div>
    )
}