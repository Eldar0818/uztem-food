import React, { useState } from 'react'
import styles from '../../styles/home/interacting.module.css'
import { MdDeliveryDining } from 'react-icons/md'
import Link from 'next/link'
import { makeBooking } from '../../util/baseUrl'
import BookingForm from './BookingForm'
import BookingCompleted from './BookingCompleted'

const CustomerInteracting = () => {

  const [time, setTime] = useState("")
  const [contact, setContact] = useState("")
  const [describe, setDescribe] = useState("")
  const [number, setNumber] = useState("one person")

  const [openBooked, setOpenBooked] = useState(false)

  const handleCreateBooking = async(e) => {
    e.preventDefault()
    let newBooking = {
      time: time,
      contact: contact,
      describe: describe,
      number: number
    }
    try {
      console.log(newBooking)
      await makeBooking(newBooking)
      setTimeout(() => {
        setTime("")
        setDescribe("")
        setNumber("")
        setOpenBooked(true)
      }, 250)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.interacting}>
      <div className={styles.interactleft}>
        <div className={styles.interactcontents}>
          <MdDeliveryDining fontSize={150} color="orange" />
          <div className={styles.interacttitle}>
            <h2>Fest Delivery</h2>
            <p>Order online easily.</p>
            <p>Delicious meal is comming to your home.</p>
            <Link href="/ordernow">
              <button 
                className={styles.oredrbtn}
                >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.interactright}>
        {openBooked ? 
        <BookingCompleted 
        setOpenBooked={setOpenBooked}
        /> :
        <BookingForm
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          describe={describe}
          setDescribe={setDescribe}
          number={number}
          setNumber={setNumber}
          handleCreateBooking={handleCreateBooking}
        />
        }
      </div>
    </div>
  )
}

export default CustomerInteracting