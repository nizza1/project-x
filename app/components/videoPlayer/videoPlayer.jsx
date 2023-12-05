"use client"

import React from 'react'

import styles from './styles.module.scss'
const VideoPlayer = ({video}) => {
  return (
          <div className={styles.videoContainer}>
            <video autoPlay loop muted={true}
            className={styles.video} /* style={{ width: '100%', height: '100%' }} */>
              <source src={video} />
            </video>
           </div>
  )
}

export default VideoPlayer