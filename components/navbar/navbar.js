import styles from '@/components/navbar/navbar.module.css'
import Image from 'next/image';

export default function NavBar() {
    return (
    <div className={styles.navbar}>
      <Image src="/stalak_logo.png" alt="Stalak" className={styles.myImage}     
      width={87.57} height={85.95} />
      <p>Stalak</p>
    </div>
    )
}