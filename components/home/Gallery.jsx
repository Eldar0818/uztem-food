import Image from 'next/image'
import React from 'react'
import styles from '../../styles/home/gallery.module.css'

const Gallery = () => {

    const galleryimgs = [
        {id: 1, uri: '/assets/gallery01.jpg'},
        {id: 2, uri: '/assets/gallery02.jpg'},
        {id: 3, uri: '/assets/gallery03.jpg'},
        {id: 4, uri: '/assets/gallery04.jpg'},
        {id: 5, uri: '/assets/gallery05.jpg'},
    ]

  return (
    <div className={styles.gallery}>
        <div className={styles.gallerybox}>
            {
                galleryimgs.map(img => (
                    <div key={img.id} className={styles.galleryimg}>
                        <Image src={img.uri} alt="" layout='fill' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Gallery