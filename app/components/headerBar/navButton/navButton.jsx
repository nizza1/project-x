"use client"

import React , {useState} from 'react'
import styles from './styles.module.css'

import NavList from '../navList/navlist'

const NavButton = ({language}) => {

  const [isActive , setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);


};

  return (
    <div className={styles.outContainer}>

        <button className={`${styles.container} 
    ${isActive ? styles.active : ''}`}
    onClick={toggleMenu}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </button>

  
 
        <NavList isActive={isActive} language={language}/>

    </div>

  )
}

export default NavButton