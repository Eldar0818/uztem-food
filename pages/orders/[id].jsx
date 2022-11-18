import React, { useState } from 'react'
import styles from '../../styles/Orders.module.css'
import data from '../../components/dummyProducts.json'

const Orders = () => {

    const orderInfo = data.yourOrders
    const [status, setStatus] = useState(0)

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
                    {
                        orderInfo?.map(order=> (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.customer}</td>
                                <td>{order.address}</td>
                                <td>{order.total} kr</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

       <div className={styles.statusbox}>
            <span className={statusClasses(0)}>Payed Successfully!</span>
            <span className={statusClasses(1)}>Preparing!</span>
            <span className={statusClasses(2)}>On the way!</span>
            <span className={statusClasses(3)}>Delivered!</span>
       </div>

    </div>
  )
}

export default Orders