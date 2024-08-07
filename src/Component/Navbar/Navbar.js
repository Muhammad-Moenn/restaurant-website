import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link} from 'react-scroll';
import { IoIosLogIn } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { motion ,useInView} from "framer-motion"
function Navbar() {
   
      
   const ref=useRef();
   const inisView=useInView(ref)
    const [menuicon,setmenuicon]=useState(false)
  return(
    <div className='nav-box'>
        <motion.div className='nav-left'
        ref={ref}
        initial={{y:-40,opacity:0}}
        animate={inisView?{y:0,opacity:1}:{y:-40,opacity:0}}
        transition={{type:'spring', duration:1.5 , delay:.1}}
        >
            <img src={logo} alt=''></img>
        </motion.div>
        <motion.div className='nav-right'
          ref={ref}
          initial={{y:-40,opacity:0}}
          animate={inisView?{y:0,opacity:1}:{y:-40,opacity:0}}
          transition={{type:'spring', duration:1.5, delay:.2}}
        >
        <div className={`s-nav-right ${menuicon?"visi" :" "}`}>
            <ul className='link-box'>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Why Us</Link></li>
                <li><Link to='service-box' smooth={true} offset={-100} duration={500}>Services</Link></li>
                <li><Link to='menu-box' smooth={true} offset={-100} duration={500}>Menu</Link></li>
                <li><Link to='start-box' smooth={true} offset={-200} duration={500}>Contact Us</Link></li>
            </ul>
            <button> <IoIosLogIn />  <p> Login</p></button>
        </div>
        <div onClick={()=>setmenuicon(!menuicon)} className='menu-icon'>{
            menuicon?
            <RxCross1 />
            :
            <CiMenuFries  />
            }</div>
        </motion.div>
        
    </div>
  )
}

export default Navbar