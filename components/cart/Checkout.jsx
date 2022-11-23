import React, { useEffect, useState } from 'react'
import styles from '../../styles/cart/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../../util/baseUrl';
import { useRouter } from 'next/router';
import { reset } from '../../redux/cartSlice'
import ButtonWrapper from '../PaypalButton';

const Checkout = () => {

  const totalCost = useSelector(state => state.cart.total)
  const discount = totalCost > 350 ? 35 : 0
  const [checkoutClicked, setCheckoutClicked] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  
    // This values are the props in the UI
    const amount = totalCost-discount;
    const currency = "SEK";
    const style = {"layout":"vertical"};

    const makeAnOrder = async (data) => {
      try {
        const response = await createOrder(data)
        if(response.status === 201){
          router.push(`/orders/${response.data._id}`)
        }
        dispatch(reset())
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className={styles.checkoutbox}>
        <h3 className={styles.checkoutheading}>Checkout:</h3>
        <div className={styles.checkoutdetails}>
            <div className={styles.detail}><span>Subtotal:</span> <span>{totalCost} kr</span></div>
            <div className={styles.detail}><span>Discount:</span>  <span>{discount} kr</span></div>
            <div className={styles.detail}><span>Total:</span> <span>{totalCost-discount} kr</span></div>
        </div>
        {
          checkoutClicked ? (
          <div className={styles.paymentbtns}>
                <ButtonWrapper
                  currency={currency}
                  showSpinner={false}
                  makeAnOrder={makeAnOrder}
                  style={style}
                  amount={amount}
                />
             <button 
              className={styles.doorpaybtn}
            >
              Cash on Delivery
             </button>
            </div>
          ) : (
            <button 
              className={styles.checkoutbtn}
              onClick={() => setCheckoutClicked(true)}
            >
              Checkout
            </button>
          )
        }
    </div>
  )
}

export default Checkout