import React from 'react'
import styles from '../styles/cart/Cart.module.css'
import data from '../components/dummyProducts.json'
import Checkout from '../components/cart/Checkout'
import CartItems from '../components/cart/CartItems'


const cart = () => {

    const cartItems = data.itemsInCart
    const totalCost = cartItems?.map(item=> item.price * item.quantity).reduce((acc, val) => {
        return acc + val;
      }, 0);
    console.log(totalCost);
    const discount = totalCost > 350 ? 20 : 0

    return (
    <div className={styles.cartpage}>
        <div className={styles.cartleft}>
            <CartItems items={cartItems}/> 
        </div>
        <div className={styles.cartright}>
            <Checkout totalCost={totalCost} discount={discount} /> 
        </div>
    </div>
  )
}

export default cart