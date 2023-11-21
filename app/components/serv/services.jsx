import React from 'react'
import styles from './styles.module.scss'

import Cards from './cardsS/cards'
const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <Cards />
        </div>
    </div>
  )
}

export default Services