import Link from 'next/link';
import React, { useState } from 'react'
import OrderlistItems from '../../components/admins/OrderlistItems';
import styles from '../../styles/admin/ordermanage.module.css'
import { getAllOrders, deleteOneOrder, updateStatus } from '../../util/baseUrl'

const Ordermanage = ({ allorders }) => {

    const [ordersList, setOrdersList] = useState(allorders)

    const statusTexts = [
        {text: "Order made", statusId: 0},
        {text: "Preparing", statusId: 1},
        {text: "On the way", statusId: 2},
        {text: "Delivered", statusId: 3},
    ]

    const handleDeleteOrder = async(id) => {
        try {
            await deleteOneOrder(id)
            setOrdersList(ordersList.filter(list => list._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const handleStatus = async(id) => {
        const item = ordersList?.filter(order => order._id === id)[0]
        const currentStatus = item.status
        let info = {status: currentStatus + 1}
        try {
            const response = await updateStatus(id, info)
            setOrdersList([
                response.data,
                ...ordersList.filter(order => order._id !== id)
            ])
        } catch (error) {
            console.log(error);    
        }
    }

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
                            deleteFunc={handleDeleteOrder}
                            nextStep={handleStatus}
                        />
                    ))
                }
            </div>
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

    const response = await getAllOrders()
    return{
        props: {
            allorders:  response.data
        }
    }
}

export default Ordermanage