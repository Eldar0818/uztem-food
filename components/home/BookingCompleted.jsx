import React from 'react'
import styles from '../../styles/home/interacting.module.css'

const BookingCompleted = ({setOpenBooked}) => {
  return (
    <div className={styles.completebox}>
        <h2>Thank You! We have recieved your booking!</h2>
        <button
            onClick={()=> setOpenBooked(false)}
        >
            Done
        </button>
    </div>
  )
}

export default BookingCompleted