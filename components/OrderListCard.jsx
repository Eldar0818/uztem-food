import Link from 'next/link'
import React, { useEffect, useState} from 'react'
import styles from '../styles/orderlistcard.module.css'

const OrderListCard = ({setOpenOrderLinks, cardRef}) => {

  const [orderLinks, setOrderLinks] = useState([])
  

  useEffect(()=> {
    let orderInfoLinks = JSON.parse(localStorage.getItem("orders_history"))
    setOrderLinks(orderInfoLinks)
  }, [])

  useEffect(()=> {   
  const handleCloseLinks = (e) => {
    if(cardRef.current && !cardRef.current.contains(e.target)){
      setOpenOrderLinks(false)
    }
  }

    document.addEventListener('click', handleCloseLinks, true)
    return () => {
      document.removeEventListener('click', handleCloseLinks, true)
    }
  }, [])

  
  return (
    <div className={styles.card} ref={cardRef}>
      <p className={styles.cardheading}>Your orders</p>
      {
        orderLinks?.length > 0 ? orderLinks.map((link) => (
          <Link key={link._id} href={`/orders/${link._id}`} onClick={() => setOpenOrderLinks(false)}>
            <div className={styles.itemrow}>
              <div className={styles.carditems}>
              {link.productInfo.map((info, index)=> (
                  <div className={styles.cardtexts} key={index}>
                    <span>{info[0]}</span>
                    <span>{info[1]}</span>
                  </div>
              ))}
              </div>
              <p className={styles.cardtotal}>{link.total} SEK</p>
            </div>
          </Link>
        )) : <p>You have not orderd something yet.</p>
      }
    </div>
  )
}

export default OrderListCard