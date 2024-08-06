import React, { useRef } from 'react'
import './Menu.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { card } from '../../detail';
import { slidesetting } from '../../slidesetting';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion,useInView } from "framer-motion"
function Menu() {
   const ref=useRef()
   const isinView=useInView(ref)
  return (
    <div className='menu-box'>
        <motion.div className='m-top'
        ref={ref}
        initial={{ y: 80, opacity: 0 }}
        animate={isinView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
        transition={{ type: 'spring', duration: 2 , delay:0.3}}
        >
            <span>OUR MENU</span>
            <h1>Menu That Always Make<br/> You Fall In Love</h1>
            
        </motion.div>
        
        <Swiper {...slidesetting} className='m-bottom'>
         
           <div className='menu-items-box'>
            {
                card.map((item,i)=>{
                    return(
                        <SwiperSlide  key={i}>
                            <div className='menu-item'>
                                <img src={item.img} alt=''/>
                                <div className='item-info'>
                                 <h3><span>$</span>{item.price}</h3>
                                 <p>{item.title}</p>
                                 <div className='info-btn'>
                                    <p>Order Now</p>
                                    <FaArrowRightLong />
                                 </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </div>
            <Slidebuttons className='btn-box'/> 
        </Swiper>
    </div>
  )
}

export default Menu

const Slidebuttons=()=>{
    const swiper  = useSwiper();
    return(
        <div className='slide-buttons'>
            <MdKeyboardArrowLeft className='s-btn' onClick={()=>swiper.slideNext()} />
            <MdKeyboardArrowRight className='s-btn' onClick={() => swiper.slidePrev()} />
        </div>
    )
}