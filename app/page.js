import Image from 'next/image'
import styles from './page.module.css'


//components
import Hero from './components/heroSection/hero'
import Contact from './components/contact/contact'
import About from './components/about/about'
/* import Services from './components/serv/services' */


import NewHero from './components/newHero/hero'
import ServicesBox from './components/srvicesBox/services'
export default function Home() {
  return (
    <main className={styles.main}>
      <NewHero />
     {/* <ServicesBox /> */}
     <About />
     <Contact />
      
     {/*  <Hero /> */}
     {/*  <Services /> */}
    </main>
  )
}
