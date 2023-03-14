import styles from '@/components/metrics/metrics.module.css'
import Image from 'next/image'


export default function Metrics() {
    return (
        <div>
            <div className={styles.contentTitle}>
            <h1>Quiero ayudarte a crear hábitos saludables que te impulsen a alcanzar tus objetivos</h1>
            </div>
            <div className={styles.contentInfo}>
                <Image src="/visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage} />
                <div className={styles.parrag}>
                <p>Te ayudo a compartir tus hábitos saludables con tus amigos y conocidos, así aprendes de las experiencias de otros y construyes una comunidad parecida a ti</p>
                </div>
            </div>
            <div className={styles.contentInfo2}>
                <div className={styles.parrag}>
                <p>Soy una red social en la que puedes conocer nuevas personas a partir de un gusto común, además puedes unirte a los clubes y practicar tus actividades favoritas</p>
                </div>
                <Image src="/visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage2} />
            </div>
            <div className={styles.contentInfo} style={{top:"3174px"}}>
                <Image src="/visuals2.png" alt="Stalak" width={378} height={378} className={styles.myImage} />
                <div className={styles.parrag}>
                <p>Conecta con personas en diferentes lugares para planificar y ejecutar actividades en común que te hagan feliz y te ayuden a llevar una vida saludable</p>
                </div>
            </div>
        </div>
        
    )
}