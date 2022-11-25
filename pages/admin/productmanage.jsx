import Link from 'next/link'
import React, { useState } from 'react'
import AddProductForm from '../../components/admins/AddProductForm'
import ProductListItems from '../../components/admins/ProductListItems'
import styles from '../../styles/admin/productmanage.module.css'
import { getAllProducts } from '../../util/baseUrl'
import { addFormStyles } from '../../components/admins/AddformAnimation'
import { BsPlusLg } from 'react-icons/bs'

const Productmanage = ({allProducts}) => {

    const [openAddForm, setOpenAddForm] = useState(false)
    const [filterInputs, setFilterInputs] = useState("")

    const filteredItems = allProducts?.filter(products => {
        if(filterInputs === ""){
            return products
        }else{
            return products.type === filterInputs
        }
    })

  return (
    <div className={styles.managepage}>
        <div className={styles.managepanel}>
            <Link href="/admin">
                <button className={styles.backtoadmin}>Back</button>
            </Link>
            <h3 className={styles.manageheading}>All our products below:</h3>
            <div className={styles.filter}>
                <select 
                    value={filterInputs} 
                    onChange={(e) => setFilterInputs(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="meal">Meals</option>
                    <option value="side">Side Meals</option>
                    <option value="dessert">Desserts</option>
                    <option value="drink">Drinks</option>
                </select>
            </div>
            <div className={styles.wrapper}>
                <div style={addFormStyles(openAddForm)}>
                    <AddProductForm/>
                </div>
                <div className={styles.allproducts}>
                    {filteredItems.map(product => (
                        <ProductListItems
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
        
        <div className={styles.addnew}>
            <button
             onClick={() =>setOpenAddForm(!openAddForm) }
            >
               <BsPlusLg className={styles.plusicon}/>
            </button>
        </div>                        

    </div>
  )
}

export async function getServerSideProps(){
    const response = await getAllProducts()
    return{
      props:{
        allProducts: response.data
      }
    }
  }

export default Productmanage