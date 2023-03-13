import styles from '@/components/callToAction/callToAction.module.css'
import Image from 'next/image';

export default function CallToAction() {
    return (
    <div className={styles.conteiner}>
        <div className={styles.blueconteiner}>
            <p>Empecemos a organizar tus hábitos y convertirlos en propósitos de vida</p>
            <button>Descargar Stalak</button>
            <Image src="/Rectangle.png" alt="Stalak phone" width={433.08} height={650} className={styles.phone}/>
        </div>
    </div>
    )
}