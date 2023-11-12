import React from 'react'
import styles from './styles.module.scss'
const AnimatedText = ({text}) => {
  return (
    <span className={styles.container}>{text}</span>
  )
}

export default AnimatedText