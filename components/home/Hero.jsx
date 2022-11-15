import React from 'react'
import styles from '../../styles/home/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.herobox}>
            <div className={styles.herbg}>
                <Image 
                    src='/assets/herobg.jpg' 
                    alt='hero' 
                    className={styles.herobgimg}
                    layout="fill"
                />
            </div>
            <div className={styles.herocontentbox}>
                <div className={styles.herocontents}>
                    <h2 className={styles.herocontenttop}>THE REAL DEAL</h2>
                    <h2 className={styles.herocontentbottom}>ON UYGHUR FOOD</h2>
                    <button className={styles.herobtn}>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero