import React from 'react'
import styles from './styles.module.scss'

//icons 
import {BsFillPlayFill} from 'react-icons/bs'

//componets 
import AnimatedText from '../animatedText/animatedText'
const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>

            <div className={styles.titleContainer}>
                <h1>
                 <AnimatedText text='Individual'/>
                 <br />  video production for internal and external <br /> <span className={styles.highlight2}>communication</span>
                </h1>
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.media}>
                    <BsFillPlayFill className={styles.icon}/>
                </div>

                <div className={styles.media2}>
                   <BsFillPlayFill className={styles.icon}/>
                </div>

                <div className={styles.media3}>
                   <BsFillPlayFill className={styles.icon}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero