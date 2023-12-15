import React from 'react'
import styles from './styles.module.scss'
import Player from '../videoPlayer/playerBox/player'

const video = '/domi.mp4'

const Services = () => {
  return (
    <div className={styles.container}>
       <div className={styles.boxesContainer}>

        <div className={styles.box}> 
          <div className={styles.inBox}>
           <Player video={video} />
          </div>
        </div>

        <div className={styles.box}> 
        <div className={styles.inBox}>
           <Player video={video} />
          </div>
        </div>
        <div className={styles.box}> 
        <div className={styles.inBox}>
           <Player video={video} />
          </div>
        </div>
        <div className={styles.box}> 
        <div className={styles.inBox}>
           <Player video={video} />
          </div>
        </div>





       </div>
    </div>
  )
}

export default Services