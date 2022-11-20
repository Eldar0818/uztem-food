import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/legacy/image'
import SizeOfMeal from '../../components/product/SizeOfMeal'
import SizeOfDrink from '../../components/product/SizeOfDrink'
import { getSingleProduct } from '../../util/baseUrl'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Product = ({ targetProduct }) => {

    const [quantity, setQuantity] = useState(1)
    const [count, setCount] = useState(1)
    const price = targetProduct.price.map(item=> item)[count - 1] * quantity

    const dispatch = useDispatch()

    const handleAddCartBtn = () => {
      dispatch(addProduct({...targetProduct, price, quantity, count}))
    }

  return (
    <div className={styles.productpage}>
        <div className={styles.productleft}>
           <div className={styles.productimg}>
            <Image 
                src={targetProduct.image} 
                alt="product"
                objectFit='cover'
                width="300px"
                height="300px"
            />
           </div>
        </div>
        <div className={styles.productright}>
            <h4>{targetProduct.name}</h4>
            <h2>{price} kr/-</h2>
            <p>{targetProduct.desc}</p>
            {targetProduct.type === "meal" && <SizeOfMeal count={count} setCount={setCount}/>}
            {targetProduct.type === "drink" && <SizeOfDrink count={count} setCount={setCount}/>}
            <div className={styles.quantity}>
                <span>quantity:</span>
                <select onChange={e=> setQuantity(e.target.value)} defaultValue={quantity}>
                {Array.from({length: 10}, (_, i) => i + 1).map(item=> (
                    <option value={item} key={item}>{item}</option>
                ))}
                </select>
            </div>
            <button 
              className={styles.addcartbtn}
              onClick={handleAddCartBtn}
            >
              Add to cart
            </button>
        </div>
    </div>
  )
}

export async function getServerSideProps({params}){
    const response = await getSingleProduct(params.id)
    return{
      props:{
        targetProduct: response.data
      }
    }
  }

export default Product