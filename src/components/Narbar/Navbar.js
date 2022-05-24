import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function Navbar() {

  const [show, setShow] = useState(false)

  // for hiding and showing of navbar when screen size is less than 600px
  // hamburger toggle
  function showSwitch() {
    return setShow(!show)
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          AF
        </div>
        <div className={show ? `${styles.links} ${styles.hamburger}` : `${styles.links}`}>
          <Link onClick={ ()=> showSwitch()} to="/">Home</Link>
          <Link onClick={ ()=> showSwitch()} to="/about">About</Link>
          <Link onClick={ ()=> showSwitch()} to="/project">Projects</Link>
          <Link onClick={ ()=> showSwitch()} to="/contact">Contact</Link>
        </div>
        <div onClick={ ()=> showSwitch()} className={show ? `${styles['bars-button']} ${styles.hamburger}` : styles['bars-button'] }>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> 
    </>
  )
}
