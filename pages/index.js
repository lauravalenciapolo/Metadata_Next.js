import styles from '@/styles/Home.module.css'
import NavBar from '@/components/navbar/navbar';
import Header from '@/components/header/header';
import Feature from '@/components/features/features';
import Metrics from '@/components/metrics/metrics';
import CallToAction from '@/components/callToAction/callToAction';


export default function Home() {

  return (
    <div className={styles.content}>
      <NavBar/>
      <Header/>
      <Feature/>
      <Metrics/>
      <CallToAction/>
    </div>
  )
}
