"use client"

import React from 'react'
import styles from './styles.module.css'





//components 
import NavButton from './navButton/navButton'
import Navlist from './navList/navlist';

const Header = () => {

  const handleScroll = (href) => {
    // Prevent the default behavior of the anchor tag
   /*  toggleIsActive(); */
    if (href) {
      const targetId = href.replace(/.*\#/, "");

      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.logContainer}>
            <h1>LOG</h1>
            </div>

            <div className={styles.navContainer}>
                <NavButton />
            </div>
            

            <div className={styles.navListCo}>
            <Navlist />
            </div>
            



        </div>
    </div>
  )
}

export default Header