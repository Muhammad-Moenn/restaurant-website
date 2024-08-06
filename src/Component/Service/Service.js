import React, { useRef } from 'react'
import './Service.css';
import delivery3 from '../../assets/order.png'
import delivery2 from '../../assets/delivery2.jpg'
import delivery4 from '../../assets/quality.png'
import { motion,useInView } from "framer-motion"
function Service() {
  const ref = useRef();
  const ref2 = useRef();
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

  return (
    <div className="service-box">
      <motion.div
        className="s-top"
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        <span>WHAT WE SERVE</span>
        <h1>Your Favourite Food<br /> Delivery Partner</h1>
      </motion.div>

      <div className="s-bottom" ref={ref2}>
        <motion.div
          className="s-img-box"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView2 ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ type: 'spring', duration: 2, delay: 0.5 }}
        >
          <img src={delivery3} alt="" />
          <h1>Easy To Order</h1>
          <p>You only need a few steps<br /> in ordering food</p>
        </motion.div>

        <motion.div
          className="s-img-box"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
          <img src={delivery2} alt="" />
          <h1>Fastest Delivery</h1>
          <p>Delivery that is always <br /> ontime even faster</p>
        </motion.div>

        <motion.div
          className="s-img-box"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView2 ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ type: 'spring', duration: 2, delay: 1.5 }}
        >
          <img src={delivery4} alt="" />
          <h1>Best Quality</h1>
          <p>Not only fast for us quality<br /> is also number one</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Service