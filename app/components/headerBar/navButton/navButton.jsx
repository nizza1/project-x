"use client"

import React , {useState} from 'react'
import styles from './styles.module.scss'

const NavButton = () => {

  const [isActive , setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
};

  return (
    <button className={`${styles.container} 
    ${isActive ? styles.active : ''}`}
    onClick={toggleMenu}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </button>
  )
}

export default NavButton