import React from 'react'
import Image from 'next/legacy/image'
import styles from '../../styles/Product.module.css'

const SizeOfMeal = ({count, setCount}) => {

    const iconStyle = (num) => {
        return{
            opacity: num === count ? '1' : '0.5'
        }
    }

    return (
        <div className={styles.sizebox}>
            <h3>Choose a size</h3>
            <div className={styles.sizeiconbox}>
                <div 
                    className={styles.sizeicomimage}
                    onClick={()=> setCount(1)}
                    style={iconStyle(1)}
                >
                    <Image 
                        src="/assets/sizeIcon.png" 
                        alt='sizeicon' 
                        width="35"
                        height="35"
                    />
                </div>
                <div 
                    className={styles.sizeicomimage}
                    onClick={()=> setCount(2)}
                    style={iconStyle(2)}
                >
                    <Image 
                        src="/assets/sizeIcon.png" 
                        alt='sizeicon' 
                        width="45"
                        height="45"
                    />
                </div>
                <div 
                    className={styles.sizeicomimage}
                    onClick={()=> setCount(3)}
                    style={iconStyle(3)}
                >
                    <Image 
                        src="/assets/sizeIcon.png" 
                        alt='sizeicon' 
                        width="55"
                        height="55"
                    />
                </div>
            </div>
        </div>
    )
}

export default SizeOfMeal