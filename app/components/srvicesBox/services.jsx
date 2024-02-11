import React from 'react'
import styles from './styles.module.scss'
import Blob from '../videoPlayer/blob/blob'
import NextVideo from '../videoPlayer/blob/next-player/nextPlayer'
const video = 'domi-UqwBXYucriU2ORjxpBzb8rYq2AcgfW.webm'

const vid2 = 'domi.mp4'


const Services = () => {
  return (
    <div className={styles.container}>

  {/*  <NextVideo /> */}
       <div className={styles.boxesContainer}>

        <div className={styles.box}> 
    
          <div className={styles.inBox}>
            <div className={styles.videoCo}>
            <Blob vid={vid2} />
            </div>
        
          </div>
        </div>

        <div className={styles.box}> 
        <div className={styles.inBox}>
           <div className={styles.videoCo}>
            <Blob vid={video}/>
            </div>
          </div>
        </div>
        <div className={styles.box}> 
        <div className={styles.inBox}>
            <div className={styles.videoCo}>
            <Blob vid={video}/>
            </div>
          </div>
        </div>
        <div className={styles.box}> 
        <div className={styles.inBox}>
           <div className={styles.videoCo}>
            <Blob vid={video}/>
            </div>
          </div>
        </div>





       </div>
    </div>
  )
}

export default Services