import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>lorem should be added</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className='footer-content-right'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-center'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8114795771</li>
                    <li>support@mealmob.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className='footer-copyright'>Copright 2024 @ Mealmob.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer