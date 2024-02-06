import React from 'react'
import { list } from '@vercel/blob';

import styles from './styles.module.css'

const  Blob = async ({vid}) => {

    const {blobs} = await list({
        prefix: vid,
        limit: 1, 
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      
      const { url } = blobs[0];



  return (
    <div className={styles.co}>
        {/* controls */}
    <video autoPlay  loop preload="none" muted={false} aria-label="Video player" className={styles.video}
   >
              <source src={url} type="video/mp4" />
     </video>
    </div>
  )
}

export default Blob