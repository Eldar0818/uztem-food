import React, { useState } from 'react'
import styles from '../../styles/Orders.module.css'
import { getOneOrder } from '../../util/baseUrl'

const Orders = ({ singleOrder }) => {

    const status = singleOrder?.status

    const statusClasses = (index) => {
        if(index - status < 1) return styles.complete
        if(index - status === 1) return styles.inprogress
        if(index - status > 1) return styles.uncomplete
    }

  return (
    <div className={styles.orderspage}>

        <div className={styles.orderbox}>
            <table>
                <thead>
                    <tr>
                        <th>OrderId: </th>
                        <th>Cutomer: </th>
                        <th>Address: </th>
                        <th>Total: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleOrder?._id}</td>
                        <td>{singleOrder?.customer}</td>
                        <td>{singleOrder?.address}</td>
                        <td>{singleOrder?.total} kr</td>
                    </tr>
                </tbody>
            </table>
        </div>

       <div className={styles.statusbox}>
            <span className={statusClasses(0)}>
              {singleOrder?.method === 0 ? "Order recieved!" : "Payed Successfully!"}
            </span>
            <span className={statusClasses(1)}>Preparing!</span>
            <span className={statusClasses(2)}>On the way!</span>
            <span className={statusClasses(3)}>Delivered!</span>
       </div>

    </div>
  )
}

export async function getServerSideProps({params}){
    const response = await getOneOrder(params.id)
    return{
      props:{
        singleOrder: response.data
      }
    }
  }

export default Orders