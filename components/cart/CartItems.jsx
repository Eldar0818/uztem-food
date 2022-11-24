import Image from 'next/legacy/image'
import React from 'react'
import styles from '../../styles/cart/Cart.module.css'
import { useSelector } from 'react-redux'

const CartItems = () => {

    const cartItems = useSelector((state) => state.cart.products)

    const sizeTexts = [
        {id: 1, text: '(small)'},
        {id: 2, text: '(middle)'},
        {id: 3, text: '(large)'}
    ]

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
                cartItems?.map(item=> (
                    <tr key={item._id}>
                        <td>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={85}
                                height={85}
                                objectFit="cover"
                            />
                        </td>
                        <td style={{color: 'orangered'}}>{item.name} {(item.type === "meal" || item.type === "drink") && ( sizeTexts.filter(text => text.id === item.count)[0]?.text )}</td>
                        <td>{item.price / item.quantity} kr</td>
                        <td>{item.quantity}</td>
                        <td>{item.price} kr</td>
                    </tr>
                ))
            }
        </tbody>   
    </table>
    </>
  )
}

export default CartItems