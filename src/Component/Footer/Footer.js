import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import insta from '../../assets/instagram.png'
function Footer() {
  return (
    <div className='footer-box'>
        <div className='footer'>
         <div class="grid-item g1">
            <img src={logo} alt=''></img>
            <p>Our job is to filling youe tummy with delicious food and with fast and free delivery time.</p>
            <div className='f-icon-box'>
            <FaSquareInstagram className='Instagram f-icon' />
            {/* <img src={insta}alt='' className='Instagram'></img> */}
            <FaFacebookF className='Facebook f-icon' />
            <IoLogoYoutube className='Youtube f-icon' />
            <IoLogoWhatsapp  className='Whatsapp f-icon'/>
            </div>
         </div>
         <div class="grid-item">
            <h2>About Us</h2>
            <p>About Us</p>
            <p>Features</p>
            <p>News</p>
            <p>Menu</p>
         </div>
         <div class="grid-item">
            <h2>Company</h2>
            <p>Why Fudo?</p>
            <p>Partner With Us</p>
            <p>FAQ</p>
            <p>Blog</p>
         </div>
         <div class="grid-item">
            <h2>Support</h2>
            <p>Account</p>
            <p>Support Center</p>
            <p>Feedback
            </p>
            <p>Contact Us</p>
            <p>Accessibility</p>
         </div>
         
        </div>
        <p className='copyright'>Copyright © 2024 Muhammad Moeen. All rights reserved.</p>
    </div>
  )
}

export default Footer