import React from 'react'
import styles from './styles.module.css'
import Video from 'next-video';
import videoLoop from '/videos/hero.mp4';

const video = 'domi-UqwBXYucriU2ORjxpBzb8rYq2AcgfW.webm'
const NextPlayer = () => {
  return (
    <div  className={styles.videoContainer}>
    <Video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={styles.video}
      >

      </Video>
      </div>
  )
}

export default NextPlayer