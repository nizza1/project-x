

import React from 'react'
import styles from './styles.module.scss'
import VideoPlayer from '../videoPlayer/videoPlayer'
import NextPlayer from '../videoPlayer/blob/next-player/nextPlayer'

const heroVideo = '/hero.mp4'

const Hero = () => {
  return (
    <div className={styles.container}>
            
        <div className={styles.innerContainer}>
          <NextPlayer />
           {/*  <VideoPlayer  video={heroVideo}/> */}
        </div>
    </div>
  )
}

export default Hero