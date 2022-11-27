import React from 'react'
import styles from '../../styles/Orders.module.css'
import { getOneOrder } from '../../util/baseUrl'
import { BsFillCheckCircleFill } from 'react-icons/bs'

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
                        <th>Cutomer: </th>
                        <th>Address: </th>
                        <th>Total: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleOrder?.customer}</td>
                        <td>{singleOrder?.address}</td>
                        <td>{singleOrder?.total} kr</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {singleOrder ?  (
         <div className={styles.statusbox}>
            <div className={statusClasses(0)}>
              <span>
                {singleOrder?.method === 0 ? "Order recieved!" : "Payed Successfully!"}
              </span>
              <BsFillCheckCircleFill fontSize={25}/>
            </div>
            <div className={statusClasses(1)}>
              <span >Preparing!</span>
              <BsFillCheckCircleFill fontSize={25}/>
            </div>
            <div className={statusClasses(2)}>
              <span >On the way!</span>
              <BsFillCheckCircleFill fontSize={25}/>
            </div>
            <div className={statusClasses(3)}>
              <span>Delivered!</span>
              <BsFillCheckCircleFill fontSize={25}/>
            </div>
          </div>
            ) : (<p className={styles.invalidirder}>This order no longer be valid!</p>)}

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