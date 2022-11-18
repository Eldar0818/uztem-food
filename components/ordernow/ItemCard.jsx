import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/ordernow/ordernow.module.css'

const ItemCard = ({product}) => {
  return (
    <Link href={`/product/${product.id}`} className={styles.itemlink}>
        <div className={styles.itemcard}>
            <div className={styles.cardleft}>
                <p className={styles.itemname}>{product.name}</p>
                <p className={styles.itemdesc}>{product.desc}</p>
            </div>
            <div className={styles.cardright}>
                <div className={styles.cardimg}>
                    <Image
                        src={product.image} 
                        alt="products" 
                        layout='fill'
                        objectFit='cover' 
                    /> 
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ItemCard