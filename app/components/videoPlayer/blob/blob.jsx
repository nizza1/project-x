
import React from 'react'
import { list } from '@vercel/blob';

import styles from './styles.module.css'

const  Blob = async ({vid}) => {

    const {blobs} = await list({
        prefix: vid,
        limit: 1, 
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      
      const link = blobs[0] ? blobs[0].url : null;
      console.log(blobs);
     /*  const { url } = blobs[0]; */

     

  return (
    <div className={styles.co}>
        {/* controls loop preload="none" */}
    <video autoPlay controls  muted={false} aria-label="Video player" className={styles.video}
   >
              <source src={link}  />
     </video>
    </div>
  )
}

export default Blob