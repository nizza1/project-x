import React from 'react'
 //components
 import Contact from '../components/contact/contact'
 import About from '../components/about/about'
import NewHero from '../components/newHero/hero'
const Page = ({ params: { lang } }) => {
  return (
    <main>
     < NewHero />
      <About language={lang}/>
      <Contact  language={lang}/>
    </main>
  )
}

export default Page