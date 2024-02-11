import React from 'react'
import styles from './styles.module.css'
import Video from 'next-video';
import videoLoop from '/videos/hero.mp4';

const video = 'https://n0xtunjqxyj91w6z.public.blob.vercel-storage.com/domi.mp4'
const NextPlayer = () => {
  return (
    <div  className={styles.videoContainer}>
    <Video
        
        src={video}
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