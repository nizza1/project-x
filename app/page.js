import Image from 'next/image'
import styles from './page.module.css'


//components
import Header from './components/headerBar/header'
import Hero from './components/heroSection/hero'
import Services from './components/serv/services'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Services />
    </main>
  )
}
