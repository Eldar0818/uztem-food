import Head from 'next/head'
import React from 'react'
import data from '../../components/dummyProducts.json'
import OrdersList from '../../components/ordernow/OrdersList'
import styles from '../../styles/ordernow/ordernow.module.css'

const Deserts = () => {
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
        <OrdersList headerText="Deserts" itemsList={data.deserts} />   
      </section>
    </div>
  )
}

export default Deserts