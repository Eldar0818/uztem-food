import React from 'react'
import styles from '../../styles/admin/managementpages.module.css'
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
            <button>Back</button>
            <h3 className={styles.manageheading}>All orders we recieved below:</h3>
            <div className={styles.orderlist}>
                {
                    ordersList?.map(item => (
                        <div key={item._id} className={styles.listitem}>
                            <div className={styles.top}>
                                {item.productInfo?.map((info, index) => (
                                    <div key={index} className={styles.prodcutinfo}>
                                        <div>{info[0]}</div>
                                        <div>{info[1]},</div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.middle}>
                                <span>Customer: {item.customer}</span>
                                <span>OrderId: {item._id}</span>
                                <button>Cancel</button>
                            </div>
                            <div className={styles.itembottom}>
                                <p>Status: {statusTexts.filter(text=> text.statusId === item.status + 1)[0].text}</p>
                                <button>Next step</button>
                            </div>
                        </div>
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