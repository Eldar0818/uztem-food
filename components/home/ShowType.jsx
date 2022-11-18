import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home/Showtype.module.css'

const ShowType = () => {

    const types = [
        {id:1, image: '/assets/types03.png', title: 'Meals & Dishes', hrefUrl: '/ordernow/dishes'},
        {id:2, image: '/assets/types02.jpg', title: 'Drinks', hrefUrl: '/ordernow/drinks'},
        {id:3, image: '/assets/types01.png', title: 'Desserts', hrefUrl: '/ordernow/desserts'},
    ]

  return (
    <div className={styles.showtype}>
        <h2>WE ARE SERVING</h2>
        <div className={styles.typebox}>
           {
            types.map(type=> (
                <Link href={type.hrefUrl} key={type.id}>
                    <div>
                        <div className={styles.imgbox}>
                            <Image 
                                src={type.image} 
                                alt="types" 
                                layout='fill' 
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <h4 className={styles.typetitle}>{type.title}</h4>
                    </div>
                </Link>
            ))
           }
        </div>
    </div>
  )
}

export default ShowType