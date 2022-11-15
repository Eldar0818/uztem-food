import React from 'react'
import styles from '../../styles/home/interacting.module.css'
import { MdDeliveryDining } from 'react-icons/md'

const CustomerInteracting = () => {

  return (
    <div className={styles.interacting}>
      <div className={styles.interactleft}>
        <div className={styles.interactcontents}>
          <MdDeliveryDining fontSize={150} color="orange" />
          <div className={styles.interacttitle}>
            <h2>Fest Delivery</h2>
            <p>Order online easily.</p>
            <p>Delicious meal is comming to your home.</p>
            <button className={styles.oredrbtn}>Order Now</button>
          </div>
        </div>
      </div>
      <div className={styles.interactright}>
        <div className={styles.interactbooking}>
          <h4>Reservation</h4>
          <h2>You can get sits in advance</h2>
          <form>
            <input type="date" />
            <input type="text" placeholder='Describe when you will arrive...' />
            <select name="" id="">
              <option value="one person">One person</option>
              <option value="two person">Two person</option>
              <option value="three person">Three person</option>
              <option value="four person">Four person</option>
              <option value="more">More</option>
            </select>
            <button type='submit'>Book  a table</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerInteracting