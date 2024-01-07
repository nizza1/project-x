import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

import AnimatedText from '../animatedText/animatedText'
const About = () => {
  return (
    <div className={styles.container} id='about'>
        <div className={styles.innerCo}>
           {/*  <h1>
                <AnimatedText text='WER SIND WIR?'/>
            </h1> */}
            <h1 className={styles.title}>ABOUT</h1>

            <div className={styles.profilesCo}>


                <div className={styles.profil}>
                    <div className={styles.imgCo}>
                        <div className={styles.img}></div>
                        <div className={styles.name}>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                
                </div>
                <div className={styles.profil}>
                    <div className={styles.imgCo}>
                        <div className={styles.img}></div>
                        <div className={styles.name}>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                
                </div>
                <div className={styles.profil}>
                    <div className={styles.imgCo}>
                        <div className={styles.img}></div>
                        <div className={styles.name}>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                
                </div>
                <div className={styles.profil}>
                    <div className={styles.imgCo}>
                        <div className={styles.img}></div>
                        <div className={styles.name}>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                
                </div>



            </div>
        </div>
    </div>
  )
}

export default About