import React from 'react'
import Image from 'next/legacy/image'
import styles from '../../styles/Product.module.css'

const SizeOfDrink = ({count, setCount}) => {
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
                        src="/assets/cupIcon.png" 
                        alt='sizeicon' 
                        width="35"
                        height="35"
                       objectFit='cover'
                    />
                </div>
                <div 
                    className={styles.sizeicomimage}
                    onClick={()=> setCount(2)}
                    style={iconStyle(2)}          
                >
                    <Image 
                        src="/assets/cupIcon.png" 
                        alt='sizeicon' 
                        width="45"
                        height="45"
                        objectFit='cover'
                    />
                </div>
                <div 
                    className={styles.sizeicomimage}
                    onClick={()=> setCount(3)}
                    style={iconStyle(3)}
                >
                    <Image 
                        src="/assets/cupIcon.png" 
                        alt='sizeicon' 
                        width="55"
                        height="55"
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default SizeOfDrink