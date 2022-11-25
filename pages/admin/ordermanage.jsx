import Link from 'next/link';
import React from 'react'
import OrderlistItems from '../../components/admins/OrderlistItems';
import styles from '../../styles/admin/ordermanage.module.css'
import { getAllOrders } from '../../util/baseUrl'

const Ordermanage = ({ordersList}) => {

    console.log(ordersList);
    const statusTexts = [
        {text: "Order made", statusId: 0},
        {text: "Preparing", statusId: 1},
        {text: "On the way", statusId: 2},
        {text: "Delivered", statusId: 3},
    ]

  return (
    <div className={styles.managepage}>
        <div className={styles.managepanel} >
            <Link href="/admin">
                <button className={styles.backtoadmin}>Back</button>
            </Link>
            <h3 className={styles.manageheading}>All orders we recieved below:</h3>
            <div className={styles.orderlist}>
                {
                    ordersList?.map(item => (
                        <OrderlistItems 
                            key={item._id} 
                            item={item} 
                            statusTexts={statusTexts}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const response = await getAllOrders()
    return{
        props: {
            ordersList: response.data
        }
    }
}

export default Ordermanage