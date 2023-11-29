"use client"

import React from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.scss'
const VideoPlayer = ({video}) => {
  return (
  
            <ReactPlayer url={video} playing={true} loop={true} /* controls={true} */ muted={true}
            className={styles.videoContainer}

            width='100%'
            height='100%'
            />
  
  )
}

export default VideoPlayer