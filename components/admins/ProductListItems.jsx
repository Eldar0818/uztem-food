import Image from 'next/image'
import React from 'react'
import styles from '../../styles/admin/productmanage.module.css'

const ProductListItems = ({ product }) => {
  return (
    <div className={styles.listitem}>
        <div className={styles.imgae}>
            <div className={styles.poster}>
                <Image src={product.image} alt={product.name} layout="fill"/>
            </div>
        </div>
        <div className={styles.content}>
            <p>{product.name}</p>
            <div className={styles.allprices}>
                {
                    product.price.map((prc, i) => (
                        <span key={i}>{prc} kr/ ,</span>
                    ))
                }
            </div>
            <p>{product.desc}</p>
        </div>
        <div className={styles.listcontrol}>
            <button className={styles.editbtn}>Edit</button>
            <button className={styles.deletebtn}>Delete</button>
        </div>
    </div>
  )
}

export default ProductListItems