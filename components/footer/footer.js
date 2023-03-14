import styles from '@/components/footer/footer.module.css'
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.conteiner}>
            <div className={styles.conteinerSocialIcon}>
                <Image src="/Social_Icons_YT.png" alt="Stalak" width={32} height={32} className={styles.myImage} />
                <Image src="/Social_Icons_Inst.png" alt="Stalak" width={32} height={32} className={styles.myImage} />
                <Image src="/Social_Icons_Git.png" alt="Stalak" width={32} height={32} className={styles.myImage} />
                <Image src="/Social_Icons_Link.png" alt="Stalak" width={32} height={32} className={styles.myImage} />
            </div>
            <p> <span>&copy;</span> 2023 Stalak Copyright</p>
        </div>
    )
}