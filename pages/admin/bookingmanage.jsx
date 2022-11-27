import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../styles/admin/bookingmanage.module.css'
import { getAllBookings } from '../../util/baseUrl'

const Bookingmanage = ({bookings}) => {
    const [allbookings, setAllBookings] = useState(bookings)
  return (
    <div className={styles.bookingpage}>
        <div className={styles.bookinglist}>
            <Link href="/admin">
                <button
                    className={styles.backtoadmin}
                >
                    Back
                </button>
            </Link>
            <h2 className={styles.heading}>Bookings:</h2>
            {
                allbookings?.map(booking => (
                    <div key={booking._id} className={styles.bookingitem}>
                        <div className={styles.bookinginfo}>
                            <p>{booking.time}</p>
                            <p>{booking.contact}</p>
                            <p>{booking.number}</p>
                        </div>
                        <p className={styles.describ}>{booking.describe}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export async function getServerSideProps(ctx){

    const myCookie = ctx.req?.cookies || ""
    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        }
    }

    const response = await getAllBookings()
    return{
      props:{
        bookings: response.data
      }
    }
  }

export default Bookingmanage