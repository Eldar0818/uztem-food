import React from 'react'
import styles from '../../styles/Menu.module.css'

const FoodMenu = ({ data }) => { 
  return (
            <div className={styles.foodmenu}>
                    <h2 className={styles.foodmenutitle}>*OUR MENU*</h2>

                    {/* type of products */}
                    <div className={styles.typegroup}>
                        <h3 className={styles.typegoupheading}>Main Meals:</h3>
                        <div className={styles.underline} />
                        <div className={styles.preoducts}>
                            {
                                data?.filter(item=> item.type === "meal").map(item=> (
                                    <div key={item._id} className={styles.product}>
                                        <h4>{item.name}</h4>
                                        <div className={styles.prices}>
                                            {item.price.map((cost, index)=> (
                                                <span key={index}>{cost} kr/- </span>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* type of products */}
                    {/* type of products */}
                    <div className={styles.typegroup}>
                        <h3 className={styles.typegoupheading}>Side Meals:</h3>
                        <div className={styles.underline} />
                        <div className={styles.preoducts}>
                            {
                                data?.filter(item=> item.type === "side").map(item=> (
                                    <div key={item._id} className={styles.product}>
                                        <h4>{item.name}</h4>
                                        <div className={styles.prices}>
                                            {item.price.map((cost, index)=> (
                                                <span key={index}>{cost} kr/ one </span>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* type of products */}
                    {/* type of products */}
                    <div className={styles.typegroup}>
                        <h3 className={styles.typegoupheading}>Dessert:</h3>
                        <div className={styles.underline} />
                        <div className={styles.preoducts}>
                            {
                                data?.filter(item=> item.type === "dessert").map(item=> (
                                    <div key={item._id} className={styles.product}>
                                        <h4>{item.name}</h4>
                                        <div className={styles.prices}>
                                            {item.price.map((cost, index)=> (
                                                <span key={index}>{cost} kr/ pies </span>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* type of products */}
                    {/* type of products */}
                    <div className={styles.typegroup}>
                        <h3 className={styles.typegoupheading}>Drinks:</h3>
                        <div className={styles.underline} />
                        <div className={styles.preoducts}>
                            {
                               data?.filter(item=> item.type === "drink").map(item=> (
                                    <div key={item._id} className={styles.product}>
                                        <h4>{item.name}</h4>
                                        <div className={styles.prices}>
                                            {item.price.map((cost, index)=> (
                                                <span key={index}>{cost} kr/ cup </span>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* type of products */}

                </div>

  )
}

export default FoodMenu