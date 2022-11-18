import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import data from '../../components/dummyProducts.json'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import SizeOfMeal from '../../components/product/SizeOfMeal'
import SizeOfDrink from '../../components/product/SizeOfDrink'

const Product = () => {

    const allProducts = data.meals.concat(data.deserts.concat(data.drinks.concat(data.side)))
    const router = useRouter()
    const pathId = router.query.id
    const target = allProducts.filter(product=> product.id == pathId)[0]

    const [quantity, setQuantity] = useState(1)
    const [count, setCount] = useState(1)

  return (
    <div className={styles.productpage}>
        <div className={styles.productleft}>
           <div className={styles.productimg}>
            <Image 
                src={target?.image} 
                alt="product"
                objectFit='cover'
                width="300px"
                height="300px"
            />
           </div>
        </div>
        <div className={styles.productright}>
            <h4>{target?.name}</h4>
            <h2>{target?.price.map(item=> item)[count - 1] * quantity} kr/-</h2>
            <p>{target?.desc}</p>
            {target?.type === "meal" && <SizeOfMeal count={count} setCount={setCount}/>}
            {target?.type === "drink" && <SizeOfDrink count={count} setCount={setCount}/>}
            <div className={styles.quantity}>
                <span>quantity:</span>
                <select onChange={e=> setQuantity(e.target.value)} defaultValue={quantity}>
                {Array.from({length: 10}, (_, i) => i + 1).map(item=> (
                    <option value={item} key={item}>{item}</option>
                ))}
                </select>
            </div>
            <button className={styles.addcartbtn}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product