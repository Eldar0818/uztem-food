import React from 'react'
import ItemCard from './ItemCard'
import styles from '../../styles/ordernow/ordernow.module.css'

const OrdersList = ({headerText, itemsList}) => {
  return (
    <div className={styles.itemcards}>
          <div className={styles.itemtype}>
            <h4>{headerText}</h4>
            <div className={styles.underline}/>
          </div>
          <div className={styles.itemcardbox}>
            {itemsList.map(product=> (
              <ItemCard key={product._id} product={product}/>
            ))}
          </div>
        </div>
  )
}

export default OrdersList