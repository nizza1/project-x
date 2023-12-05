
import React from 'react'

import styles from './styles.module.scss'
const VideoPlayer = ({video}) => {
  return (
         
            <video autoPlay loop muted={true}
            className={styles.video} /* style={{ width: '100%', height: '100%' }} */>
              <source src={video} />
            </video>
    
  )
}

export default VideoPlayer