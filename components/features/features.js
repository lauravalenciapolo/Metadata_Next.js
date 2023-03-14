import styles from '@/components/features/features.module.css'

export default function Feature() {
    return (
    <div className={styles.featureContent}>
      <h1>¿Qué puedo hacer por ti?</h1>
      <div className={styles.content}>
        <div className={styles.cardContent}>
            <h1>laura</h1>
        </div>
        <div className={styles.cardContent}>
            <h1>hola</h1>
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