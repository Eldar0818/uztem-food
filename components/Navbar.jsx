import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { FaRegUserCircle, FaRegTimesCircle } from 'react-icons/fa'
import { BsBasket2Fill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [clickMenu, setClickMenu] = useState(false)

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
            <div className={styles.login}>
                <FaRegUserCircle className={styles.loginicon}/>
                <span>Log in</span>
            </div>
        </section>
        <section className={styles.navbottom}>
            <div className={styles.logo}>
                <Image 
                    src="/assets/logo.jpg" 
                    width="45" 
                    height="45" 
                    alt="logo" 
                    style={{ borderRadius: '50%' }}
                />
                <h3 className={styles.logotext}>UzTem</h3>
            </div>
            <div className={styles.navmenu}>
                <div className={styles.navlinks}>
                    <span className={styles.navlink}>About</span>
                    <span className={styles.navlink}>Menu</span>
                    <span className={styles.navlink}>Contact</span>
                </div>
            </div>
            <div className={styles.navbtns}>
                <div className={styles.navcart}>
                    <BsBasket2Fill className={styles.carticon} />
                    <span className={styles.counter}>2</span>
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
                <h5 className={styles.menuitem}>About</h5>
                <h5 className={styles.menuitem}>Menu</h5>
                <h5 className={styles.menuitem}>Contact</h5>
            </div>
            <p className={styles.menuremind}>Online order - Free delivery</p>
        </div>
    </nav>
  )
}

export default Navbar