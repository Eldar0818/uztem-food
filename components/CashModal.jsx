import React, { useState } from 'react'
import styles from '../styles/cart/Cart.module.css'

const CashModal = ({amount, makeAnOrder, setOpenCashModal, productDetails}) => {

    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleCashPay = () => {
        makeAnOrder({
            customer: customer,
            address: address,
            total: amount,
            productInfo: productDetails,
            phone: phone,
            status: 0,
            method: 0
          })
          setTimeout(()=> {
              setOpenCashModal(false)
          }, 500)
    }

  return (
    <div className={styles.modaloverlay}>
        <div className={styles.modalbody}>
            <h3>You have to pay {amount} kr on your doorstep.</h3>
            <div className={styles.inputs}>
                <label htmlFor="fullname">Full name:</label>
                <input 
                    type="text" 
                    placeholder='John Doe...' 
                    onChange={(e) => setCustomer(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="contact number">Contact number:</label>
                <input 
                    type="text" 
                    placeholder='0728403982' 
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="delivery address">Delivery address:</label>
                <textarea 
                    placeholder='Bogatan 21, Skelleftehamn'
                    onChange={(e) => setAddress(e.target.value)}
                    required
                >
                </textarea>
            </div>
            <div className={styles.cashbtns}>
                <button className={styles.confirmbtn} onClick={handleCashPay}>Confirm</button>
                <button 
                    className={styles.cancelbtn}
                    onClick={()=> setOpenCashModal(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default CashModal