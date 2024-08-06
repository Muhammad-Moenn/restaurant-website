
import React, { useRef } from 'react'
import './Start.css';
import app from '../../assets/download_app.png'
import { motion,useInView } from "framer-motion";
function Start() {
    const ref = useRef();
    const ref2 = useRef();
    const isInView = useInView(ref);
    const isInView2 = useInView(ref2);
  return (
    <div className='start-box'>
        <div className='s-left'>
            <motion.span
               ref={ref2}
               initial={{ y: 40, opacity: 0 }}
               animate={isInView2 ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
               transition={{ type: 'spring', duration: 2 }}
            >DOWNLOAD APP</motion.span>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ type: 'spring', duration: 2,delay:.3 }}
            >Get Started With Fudo Today!</motion.h1>
            < motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ type: 'spring', duration: 2,delay:.5 }}
            >Discover food wherever and whenever you want and get your food delivered on time, everytime.</motion.p>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={isInView2? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ type: 'spring', duration: 2, delay:.7 }}
            
            >Get The App</motion.button>
        </div>
        <motion.div className='s-right'
        ref={ref}
        initial={{ x: 90, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 90, opacity: 0 }}
        transition={{ type: 'spring', duration: 2 }}
        >
            <img src={app} alt=''></img>
        </motion.div>
    </div>
  )
}

export default Start