import Image from 'next/legacy/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsBasket2Fill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import OrderListCard from './OrderListCard'

const Navbar = () => {

    const [clickMenu, setClickMenu] = useState(false)
    const [openOrderLinks, setOpenOrderLinks] = useState(false)
    const cardRef = useRef(null)
    const router = useRouter()
    const itemsNumber = useSelector(state => state.cart.itemsNumber)

    const handleChangeRoute = () => {
        router.push('/')
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 600){
                setClickMenu(false)
            }
        })
    }, [])
    
  return (
    <nav className={styles.navbar}>
        <section className={styles.navtop}>
            <div />
            <p className={styles.navtopremider}>Online order - Free delivery</p>
            <div className={styles.orderscardbtn}>
              <button onClick={() => setOpenOrderLinks(true)}>Your Orders</button>
            </div>
        </section>
        {openOrderLinks && <OrderListCard setOpenOrderLinks={setOpenOrderLinks} cardRef={cardRef} /> }
        <section className={styles.navbottom}>
                <div className={styles.logo}>
            <Link href="/">
                    <Image 
                        src="/assets/logo.jpg" 
                        width="45" 
                        height="45" 
                        alt="logo" 
                        style={{ borderRadius: '50%' }}
                    />
            </Link>
            <Link href="/">
                    <h3 className={styles.logotext}>UzTem</h3>
            </Link>
                </div>
            <div className={styles.navmenu}>
                <div className={styles.navlinks}>
                    <a href="#about" onClick={handleChangeRoute}>
                        <span className={styles.navlink}>About</span>
                    </a>
                    <Link href="/menu">
                        <span className={styles.navlink}>Menu</span>
                    </Link>
                    <a href="#contact">
                        <span className={styles.navlink}>Contact</span>
                    </a>
                </div>
            </div>
            <div className={styles.navbtns}>
                <div className={styles.navcart}>
                    <Link href="/cart" style={{display: 'flex', alignItems: 'center'}}>
                        <BsBasket2Fill className={styles.carticon} />
                        <span className={styles.counter}>{itemsNumber}</span>
                    </Link>
                </div>
                <GiHamburgerMenu 
                    className={styles.burgermenu}
                    onClick={() => setClickMenu(true)}
                />
            </div>
        </section>
        <div className={clickMenu ? styles.menucardclicked : styles.menucard}>
            <div className={styles.closebtn}>
                <FaRegTimesCircle 
                    fontSize={25} 
                    cursor="pointer" 
                    onClick={() => setClickMenu(false)}
                />
            </div>
            <div className={styles.menuitems}>
                <a href="#about">
                    <h5 className={styles.menuitem} onClick={handleChangeRoute}>About</h5>
                </a>
                <Link href="/menu">
                    <h5 className={styles.menuitem}>Menu</h5>
                </Link>
                <a href="#contact">
                    <h5 className={styles.menuitem}>Contact</h5>
                </a>
            </div>
            <p className={styles.menuremind}>Online order - Free delivery</p>
        </div>
    </nav>
  )
}

export default Navbar