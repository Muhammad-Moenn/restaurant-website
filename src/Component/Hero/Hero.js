import React, { useRef } from 'react'
import './Hero.css';
import hero from '../../assets/Hero .png'
import delivery3 from '../../assets/delivery3.png';
import { FaPlay } from "react-icons/fa";
import { motion,useInView } from "framer-motion"
function Hero() {
    const ref=useRef();
    const isinView=useInView(ref)
  return (
    <div className='hero-box'>
        <div className='h-left'>
            <motion.div className='faster'
            ref={ref}
            initial={{y:50,opacity:0}}
            animate={isinView?{y:0,opacity:1}:{y:50,opacity:0}}
            transition={{type:'spring', duration:2}}
            >
                <p>More than Faster</p>
                <img src={delivery3} alt=''></img>
            </motion.div>
            <motion.h1
            ref={ref}
            initial={{y:50,opacity:0}}
            animate={isinView?{y:0,opacity:1}:{y:50,opacity:0}}
            transition={{type:'spring', duration:2,delay:.3}}
            >Be The Fastest<br/> In Delivering <br/>Your<span>Food</span></motion.h1>
            <motion.p
            ref={ref}
            initial={{y:50,opacity:0}}
            animate={isinView?{y:0,opacity:1}:{y:50,opacity:0}}
            transition={{type:'spring', duration:2,delay:.5}}
            >Our job is to filling your tummy with delicious food and with fast and free delivery.</motion.p>
            <motion.div className='h-btn-box'
            ref={ref}
             initial={{y:50,opacity:0}}
             animate={isinView?{y:0,opacity:1}:{y:50,opacity:0}}
             transition={{type:'spring', duration:2,delay:.7}}
            >
                <button>Get Started</button>
                <div className='play-btn'>
                    <div><FaPlay /></div>
                    <span>Watch Video</span>
                </div>
            </motion.div>
        </div>
        <div className='h-right'>
            <motion.div className='img-box'
            ref={ref}
             initial={{x:100,opacity:0}}
             animate={isinView?{x:0,opacity:1}:{x:100,opacity:0}}
             transition={{type:'spring', duration:2, delay:.3}}
            >
                <img src={hero} alt=''></img>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero