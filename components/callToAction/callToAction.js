import styles from '@/components/callToAction/callToAction.module.css'
import Image from 'next/image';
import classnames from 'classnames/bind';
import { useEffect } from 'react'

const cx = classnames.bind(styles);

export default function CallToAction() {

    useEffect(() => {
        const element = document.querySelector(`.${cx('conteiner')}`);
        window.addEventListener('scroll', () => {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

            if (documentHeight - (scrollPosition + windowHeight) == 0) {
                element.style.display = "flex"
            }
        });
    }, []);

    return (

        <div className={styles.conteiner}>
            <div className={styles.blueconteiner}>
                <div>
                    <p>Empecemos a organizar tus hábitos y convertirlos en propósitos de vida</p>
                    <button>Descargar Stalak</button>
                </div>
            </div>
            <Image src="/celularLanding.png" alt="Stalak phone" width={433.08} height={650} className={styles.phone} />
        </div>
    )
}