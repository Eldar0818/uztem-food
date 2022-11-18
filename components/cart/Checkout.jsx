import React from 'react'
import styles from '../../styles/cart/Cart.module.css'

const Checkout = ({totalCost, discount}) => {
  return (
    <div className={styles.checkoutbox}>
        <h3 className={styles.checkoutheading}>Checkout:</h3>
        <div className={styles.checkoutdetails}>
            <div className={styles.detail}><span>Subtotal:</span> <span>{totalCost} kr</span></div>
            <div className={styles.detail}><span>Discount:</span>  <span>{discount} kr</span></div>
            <div className={styles.detail}><span>Total:</span> <span>{totalCost-discount} kr</span></div>
        </div>
        <button className={styles.checkoutbtn}>Checkout</button>
    </div>
  )
}

export default Checkout