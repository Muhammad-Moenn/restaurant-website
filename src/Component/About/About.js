import React, { useRef } from "react";
import "./About.css";
import cook from "../../assets/vater.png";
import avatar from "../../assets/avatar.jpg";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
function About() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  const isInView6 = useInView(ref6);
  return (
    <div className="about-box">
      <div className="a-left">
        <motion.div
          className="a-img-box"
          ref={ref}
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <img src={cook} alt=""></img>
        </motion.div>
      </div>
      <div className="a-right">
        <motion.span
          ref={ref2}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          WHAT THEY SAY
        </motion.span>
        <motion.h1
          ref={ref3}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView3 ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.3 }}
        >
          What Our Customer Say
          <br /> About Us
        </motion.h1>
        <motion.p
          ref={ref4}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView4 ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.6 }}
        >
          "Fudo is simply outstanding! The variety and deliciousness of their
          meals are unparalleled, offering something for every palate. What sets
          Fudo apart is their exceptional service. The delivery is impressively
          fast, ensuring your food arrives hot and fresh."
        </motion.p>
        <motion.div
          className="avatar-box"
          ref={ref5}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView5 ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.9 }}
        >
          <img src={avatar} alt=""></img>
          <div className="avatar-info">
            <h3>Theresa Jordan</h3>
            <p>Food Enthusiast</p>
          </div>
        </motion.div>
        <motion.div
          className="rating-box"
          ref={ref6}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView6 ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 1.2 }}
        >
          <FaStar className="rating"/>
          <FaStar className="rating" />
          <FaStar className="rating" />
          <FaStar className="rating"/>
          <FaRegStar className="rating"/>
          <p className="rating">4.7</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
