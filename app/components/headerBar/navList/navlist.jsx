import React from 'react'

import styles from './styles.module.css'

//icons
import { FaYoutube ,FaInstagramSquare , FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Navlist = ({isActive}) => {

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
                }} > contact</button>

                 <button 
               className={styles.link}
               onClick={()=> {
                  handleScroll('#about');
                }} > about</button>

                <div className={styles.social}>
               < FaYoutube className={styles.socialIcon}/>
               <FaLinkedin  className={styles.socialIcon}/>
               <FaInstagramSquare className={styles.socialIcon} />
                </div>

                
                
            </div>
  )
}

export default Navlist