import Link from 'next/link'
import React from 'react'
import styles from '../../styles/admin/adminhome.module.css'

const Admin = () => {
  return (
    <div className={styles.adminhome}>
        <div className={styles.adminwrap}>
            <h3>Welcome to the admin panel.</h3>
            <div className={styles.managmentparts}>

                <div className={styles.managementlink}>
                    <p>Manage all orders via click here</p>
                    <Link href="/admin/orderslist">
                        <button className={styles.managebtn}>Orders List</button>
                    </Link>
                </div>
                <div className={styles.managementlink}>
                    <p>Manage all products via click here</p>
                    <Link href="/admin/productslist">
                        <button className={styles.managebtn}>Products List</button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Admin