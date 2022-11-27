import React from 'react'
import styles from '../../styles/home/interacting.module.css'

const BookingForm = ({time, setTime, contact, setContact, describe, setDescribe, number, setNumber, handleCreateBooking}) => {
  return (
    <div className={styles.interactbooking}>
          <h4>Reservation</h4>
          <h2>You can get sits in advance</h2>
          <form onSubmit={handleCreateBooking} >
            <input 
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder='Conatct number...'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder='Describe when you will arrive...'
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
              required
            />
            <select 
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            >
              <option value="one person">One person</option>
              <option value="two person">Two person</option>
              <option value="three person">Three person</option>
              <option value="four person">Four person</option>
              <option value="more">More</option>
            </select>
            <button 
              type='submit'
              onClick={handleCreateBooking}
            >
              Book a table
            </button>
          </form>
        </div>
  )
}

export default BookingForm