import Head from 'next/head'
import React from 'react'
import OrdersList from '../../components/ordernow/OrdersList'
import styles from '../../styles/ordernow/ordernow.module.css'
import { getAllProducts } from '../../util/baseUrl'

const Drinks = ({drinks}) => {
  return (
    <div>
     <Head>
        <title>UzTem Buffe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.ordernow}>

        <header className={styles.ordernowintro}>
          <h3>Delicious Meals Waiting For Your Order!</h3>
        </header>
        <OrdersList headerText="Drinks" itemsList={drinks} />
      </section>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await getAllProducts()
  return{
    props:{
     drinks: response.data.filter(product=> product.type === "drink")
    }
  }
}

export default Drinks