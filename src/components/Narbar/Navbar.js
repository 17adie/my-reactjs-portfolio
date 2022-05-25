import React, { useState } from 'react'
// import { Link, useMatch, useResolvedPath, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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
          <NavLink onClick={ ()=> showSwitch()} to='/'>Home</NavLink>
          <NavLink onClick={ ()=> showSwitch()} to='/about'>About</NavLink>
          <NavLink onClick={ ()=> showSwitch()} to='/project'>Projects</NavLink>
          <NavLink onClick={ ()=> showSwitch()} to='/contact'>Contact</NavLink>
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


// export default function Navbar() {

//   const [show, setShow] = useState(false)

//   // for hiding and showing of navbar when screen size is less than 600px
//   // hamburger toggle
//   function showSwitch() {
//     return setShow(!show)
//   }

//   // for active links
//   function CustomLink({ to, children, ...props }){
//     const resolvePath = useResolvedPath(to) // to get the actual path that you accessing
//     const isActive = useMatch( {path: resolvePath.pathname, end: true} ) // get url path | end: true = exact url link

//     // console.log(to)
//     // console.log(children) // text : Home, About, Projects and Contact
//     // console.log(props) // for classNames etc. kung meron kang ipapasa.
  
//     return (
//       <Link onClick={ ()=> showSwitch()} className={isActive ? styles.active : ''} to={to} {...props} >
//         {children}
//       </Link>
//     )
  
//   }

//   return (
//     <>
//       <div className={styles.navbar}>
//         <div className={styles.logo}>
//           AF
//         </div>
//         <div className={show ? `${styles.links} ${styles.hamburger}` : `${styles.links}`}>
//           <CustomLink to='/'>Home</CustomLink>
//           <CustomLink to='/about'>About</CustomLink>
//           <CustomLink to='/project'>Projects</CustomLink>
//           <CustomLink to='/contact'>Contact</CustomLink>
//         </div>
//         <div onClick={ ()=> showSwitch()} className={show ? `${styles['bars-button']} ${styles.hamburger}` : styles['bars-button'] }>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div> 
//     </>
//   )
// }




