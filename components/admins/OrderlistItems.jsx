import React from 'react'
import styles from '../../styles/admin/ordermanage.module.css'

const OrderlistItems = ({item, statusTexts, deleteFunc, nextStep}) => {

  return (
    <div className={styles.listitem}>
        <h4 className={styles.totalcost}>Total cost: {item.total} kr</h4>
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
            <span>Payment: {item.method === 1 ? "Paied" : "Unpaied"}</span>
            <span>OrderId: {item._id}</span>
            <button
                onClick={() => deleteFunc(item._id)}
            >
                Cancel
            </button>
        </div>
        <div className={styles.itembottom}>
            <p>Status: {statusTexts.filter(text=> text.statusId === item.status)[0].text}</p>
            <button
                onClick={() => nextStep(item._id)}
                disabled={item.status === 3}
            >
                Next step
            </button>
        </div>
    </div>
  )
}

export default OrderlistItems