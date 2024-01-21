import React from 'react'

import styles from './styles.module.css'

//icons
import { FaYoutube ,FaInstagramSquare , FaLinkedin} from "react-icons/fa";

import {en , de} from './data'


const Navlist = ({isActive , language}) => {

  const lang = language === 'de' ? de : en ;
  const data = lang
  const handleScroll = (href) => {
    // Prevent the default behavior of the anchor tag
   /*  toggleIsActive(); */
    if (href) {
      const targetId = href.replace(/.*\#/, "");

      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={`${styles.links} ${isActive ? '' : styles.close}`}>
                <button 
               className={styles.link}
               onClick={()=> {
                  handleScroll('#contact');
                }} > {data.contact}</button>

                 <button 
               className={styles.link}
               onClick={()=> {
                  handleScroll('#about');
                }} > {data.about}</button>

                <div className={styles.social}>
               < FaYoutube className={styles.socialIcon}/>
               <FaLinkedin  className={styles.socialIcon}/>
               <FaInstagramSquare className={styles.socialIcon} />
                </div>

                
                
            </div>
  )
}

export default Navlist