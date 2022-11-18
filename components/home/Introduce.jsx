import Image from 'next/legacy/image'
import React from 'react'
import styles from '../../styles/home/introduce.module.css'

const Introduce = () => {
  return (
    <div className={styles.intro} id="about">
        <div className={styles.introbg}>
            <Image 
                src="/assets/introbg.jpg" 
                alt="intro" 
                layout='fill' 
                className={styles.introimg}
            />
        </div>
        <div className={styles.introcontents}>
            <div className={styles.introcontentsbox}>
                <h3>
                    Fresh.<br/>
                    Authentic.<br/>
                    Simple.
                </h3>
                <div className={styles.introdesc}>
                    The taste of our meals comes from our far homeland.
                </div>
                <div className={styles.introdesc}>
                With us, you will always find something to suit everyone, young and old. Of course, you can get everything on the menu for takeaway. UzTem should be the first choice when it comes toNoodles, polo, kebab, salad and take away. Here you can sit down for both lunch and dinner, and also order food for takeaway if desired.
                </div>
            </div>
            <div className={styles.introcontentsemptybox}/>
        </div>
    </div>
  )
}

export default Introduce