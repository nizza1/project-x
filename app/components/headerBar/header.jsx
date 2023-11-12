import React from 'react'
import styles from './styles.module.scss'

//components 
import NavButton from './navButton/navButton'

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
        </div>
    </div>
  )
}

export default Header