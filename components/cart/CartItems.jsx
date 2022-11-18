import Image from 'next/legacy/image'
import React from 'react'
import styles from '../../styles/cart/Cart.module.css'

const CartItems = ({items}) => {
  return (
    <>
    <table width="100%" className={styles.cartitems}>
        <thead>
            <tr>
                <th>Product:</th>
                <th>Name:</th>
                <th>Price:</th>
                <th>Quantity:</th>
                <th>Total:</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(item=> (
                    <tr key={item.id}>
                        <td>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={85}
                                height={85}
                                objectFit="cover"
                            />
                        </td>
                        <td style={{color: 'orangered'}}>{item.name}</td>
                        <td>{item.price} kr</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity} kr</td>
                    </tr>
                ))
            }
        </tbody>   
    </table>
    </>
  )
}

export default CartItems