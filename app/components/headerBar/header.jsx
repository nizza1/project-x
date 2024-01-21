"use client"

import React from 'react'
import styles from './styles.module.css'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'


//components 
import NavButton from './navButton/navButton'
import Navlist from './navList/navlist';

const Header = () => {

const router = useRouter();

 const path = usePathname();
 const pathParts = path.split('/');
 const lang = pathParts[1] || 'en';

const switchLocale = (newLanguage) => {
  const newPath = `/${newLanguage}${path.substring(3)}`;
  router.push(newPath);
};

 

  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.logContainer}>
            <h1>LOG</h1>
            </div>

            <div className={styles.navContainer}>
                <div className={styles.langSwitcher}>
                    <button
                    onClick={() => switchLocale('en')} className={`${styles.langButton} ${lang === 'en' ? styles.selectedLang : ''}`}>EN</button>
                    <button 
                    onClick={() => switchLocale('de')}
                    className={`${styles.langButton} ${lang === 'de' ? styles.selectedLang : ''}`}>DE</button>
                </div>
                <NavButton language={lang}/>
            </div>


            <div className={styles.navListCo}>
            <Navlist language={lang} />
            </div>
            



        </div>
    </div>
  )
}

export default Header