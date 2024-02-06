import React from 'react'
import styles from './styles.module.scss'
import Blob from '../videoPlayer/blob/blob'

const video = 'domi.mp4'


const Services = () => {
  return (
    <div className={styles.container}>

     
       <div className={styles.boxesContainer}>

        <div className={styles.box}> 
    
          <div className={styles.inBox}>
            <div className={styles.videoCo}>
            <Blob vid={video} />
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