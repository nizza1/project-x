

import React from 'react'
import styles from './styles.module.scss'
/* import dynamic from 'next/dynamic'; */
/* import ReactPlayer from 'react-player' */

/* const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }); */
import VideoPlayer from '../videoPlayer/videoPlayer'

const heroVideo = '/hero.mp4'

const Hero = () => {
  return (
    <div className={styles.container}>
            
        <div className={styles.innerContainer}>
            <VideoPlayer  video={heroVideo}/>
        </div>
    </div>
  )
}

export default Hero