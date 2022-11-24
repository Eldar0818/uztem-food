import React, { useEffect, useState } from 'react'
import styles from '../../styles/cart/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../../util/baseUrl';
import { reset } from '../../redux/cartSlice'
import ButtonWrapper from '../PaypalButton';
import CashModal from '../CashModal';

const Checkout = () => {

  const cartList = useSelector(state => state.cart.products)
  const totalCost = useSelector(state => state.cart.total)
  const discount = totalCost > 350 ? 35 : 0
  const [checkoutClicked, setCheckoutClicked] = useState(false)
  const [openCashModal, setOpenCashModal] = useState(false)
  const [storageItems, setStorageItems] = useState([])
  const dispatch = useDispatch()
  
    // This values are the props in the UI for paypal and cash as well
    const amount = totalCost-discount;
    const currency = "SEK";
    const style = {"layout":"vertical"};

    const productDetails = cartList?.map(pd => [pd.name, pd.quantity])
    useEffect(() => {
       setStorageItems(JSON.parse(localStorage.getItem("orders_history")) || [])
    }, [])

    const makeAnOrder = async (data) => {
      try {
        const response = await createOrder(data)
        if(response.status === 201){
          localStorage.setItem("orders_history", JSON.stringify([...storageItems ,response.data]))
        }
        dispatch(reset())
        setCheckoutClicked(false)
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
                  productDetails={productDetails}
                />
             <button 
              className={styles.doorpaybtn}
              onClick={() => setOpenCashModal(true)}
            >
              Cash on Delivery
             </button>
            </div>
          ) : (
            <button 
              className={styles.checkoutbtn}
              onClick={() => setCheckoutClicked(true)}
              disabled={cartList?.length < 1}
            >
              Checkout
            </button>
          )
        }
    {openCashModal && 
    <CashModal 
      amount={amount} 
      makeAnOrder={makeAnOrder}
      setOpenCashModal={setOpenCashModal}
      productDetails={productDetails}
    />}
    </div>
  )
}

export default Checkout