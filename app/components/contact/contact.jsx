"use client"

import React , {useState ,useRef } from 'react'
import styles from './styles.module.css'

import AnimatedText from '../animatedText/animatedText'
 

//icons 
import {MdAlternateEmail} from 'react-icons/md'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineMessage} from 'react-icons/ai'

const Contact = () => {

    const strockRef = useRef(null)

    const [formData , setFormData] = useState({
        email : '',
        phone : '',
        name : '',
        message : '',
      })

      const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({
          ...formData,
          [name]: value,
        })

      }
    
      const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (data.success) {
    
            alert(data.message);
          } else {
           
            alert(data.message);
          }
        } catch (error) {
          alert('Error:'+ error);
        }
      }


  return (
    <div className={styles.container} id='contact'>
        <div className={styles.innerContainer}>

            
            <h1 ref={strockRef} className={styles.title}> KONTAKT</h1>
         {/*    <h1><AnimatedText text='KONTAKT'/></h1> */}

            <form className={styles.form} onSubmit={handleSubmit}>
       
        <div className={`${styles.email} ${styles.block}`}>
          <label  htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            placeholder="e.g steve@example.com" 
            autoComplete="email"
            required
            value={formData.email} 
            onChange={handleChange} 
          />
          <MdAlternateEmail className={styles.iconss}/>
        </div>
        <div className={`${styles.phone} ${styles.block}`}>
          <label htmlFor="frm-phone">Phone</label>
          <input
            id="frm-phone"
            placeholder="your phone number"
            type="text"
            name="phone"
            autoComplete="tel"
            required
            value={formData.phone} 
            onChange={handleChange} 
          />
            <BsTelephoneOutbound className={styles.iconss}/>
        </div>
        <div className={`${styles.name} ${styles.block}`}>
          <div>
            <label htmlFor="frm-first"> Name</label>
            <input
              id="frm-first"
              placeholder="e.g steve"
              type="text"
              name="name"
              autoComplete="given-name"
              required
              value={formData.name} 
              onChange={handleChange} 
            />
              <RxAvatar className={styles.iconss}/>
          </div>
     
        </div>
        <div className={`${styles.message} ${styles.block}`}>
          <label htmlFor="frm-message">Message</label>
          <textarea className={styles.textarea} id="frm-message" rows="6" name="message" placeholder="your message"
          value={formData.message} 
          onChange={handleChange} 
          ></textarea>
            <AiOutlineMessage className={styles.iconss}/>
        </div>
        <div className={`${styles.button} ${styles.block}`}>
         
        <button>SENDEN</button>
        </div>
        
           </form>
        </div>
    </div>
  )
}

export default Contact