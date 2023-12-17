import Image from 'next/image'
import styles from './page.module.css'


//components
import Header from './components/headerBar/header'
import Hero from './components/heroSection/hero'
import Contact from './components/contact/contact'
/* import Services from './components/serv/services' */

import NewHero from './components/newHero/hero'
import ServicesBox from './components/srvicesBox/services'
export default function Home() {
  return (
    <main className={styles.main}>
      <NewHero />
     <ServicesBox />
     <Contact />
{/*       <Header /> */}
    {/*   <Hero /> */}
    {/*   <Services /> */}
    </main>
  )
}
