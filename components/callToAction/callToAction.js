import styles from '@/components/callToAction/callToAction.module.css'
import Image from 'next/image';
import classnames from 'classnames/bind';
import { useEffect } from 'react'

const cx = classnames.bind(styles);

export default function CallToAction() {

    useEffect(() => {
        const element = document.querySelector(`.${cx('conteiner')}`);
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop >= 2547) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";;
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
        <Image src="/Rectangle1.png" alt="Stalak phone" width={333.08} height={550} className={styles.phone}/>
        </div>
    )
}