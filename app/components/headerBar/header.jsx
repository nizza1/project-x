"use client"

import React from 'react'
import styles from './styles.module.css'





//components 
import NavButton from './navButton/navButton'
import Navlist from './navList/navlist';

const Header = () => {


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