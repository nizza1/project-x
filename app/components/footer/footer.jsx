import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import AnimatedText from '../animatedText/animatedText'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.innerCo}>
            <div className={styles.linksCo}>
                <ul>
                    <li><Link href='#' className={styles.link}>IMPRESSUM</Link></li>
                    <li><Link href='#' className={styles.link}>AGB</Link></li>
                    <li><Link href='#' className={styles.link}>DATENSCHUTZ</Link></li>
                </ul>
            </div>

            <div className={styles.logoCo}>
              {/*   <h1>
                    LOGO
                </h1> */}
                <h2><AnimatedText text='LOGO' /></h2>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <p>
                All-rights received by LOREM 2024
            </p>
        </div>

    </footer>
  )
}

export default Footer