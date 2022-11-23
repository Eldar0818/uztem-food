import styles from '../styles/cart/Cart.module.css'
import Checkout from '../components/cart/Checkout'
import CartItems from '../components/cart/CartItems'

const cart = () => {

    return (
    <div className={styles.cartpage}>
        <div className={styles.cartleft}> 
            <CartItems />
        </div>
        <div className={styles.cartright}>
            <Checkout /> 
        </div>
    </div>
  )
}

export default cart