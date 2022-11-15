import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footertop}>
        <div className={styles.footerinfo}>
          <p>Call: +46728403982</p>
          <p>Email: uztem1020@gmail.com</p>
        </div>
        <div className={styles.footerinfo}>
          <p>Adress: Almbygatan 14 Spånga, Stockholm</p>
          <p>Opening hours: Monday-Friday 09:00-21:00, Saturday-Sunday 10:00-20:30</p>
        </div>
      </div>
      <div className={styles.footerbottom}>
        <div className={styles.copyright}>
          <p>&copy; 2022 uztem, all rights reserved.</p>
        </div>
        <div className={styles.footericons}>
          <AiFillFacebook 
            color='#fff' 
            fontSize={25} 
            cursor="pointer"
            style={{ margin: '0 15px' }}
          />
          <FaInstagramSquare 
            color='#fff' 
            fontSize={25} 
            cursor="pointer"
            style={{ margin: '0 15px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer