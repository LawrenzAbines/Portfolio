import "./FooterStyle.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook,
 FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{ color: "#fff", 
                    marginRight: "2rem" }} />
                    <div>
                        <p>San Juan City, Metro Manila.</p>
                        <p>Philippines.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} 
                    style={{ color: "#fff", 
                    marginRight: "2rem" }} /> 
                    (+63)920 831 4981</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} 
                    style={{ color: "#fff", 
                    marginRight: "2rem" }} />
                    lawrenz.abines23@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About</h4>
                <p>I'm a front-end developer who are eager to learn new things.</p>
                 <div className="social">
                    <a href="https://web.facebook.com/lawrenz.arandela.26/"><FaFacebook size={30} 
                    style={{ color: "#fff", 
                    margin: "1rem" }} /></a>
                    <a href="https://www.instagram.com/l_awrenzo/"><FaInstagram size={30} 
                    style={{ color: "#fff", 
                    margin: "1rem" }} /></a>
                    <a href="https://github.com/LawrenzAbines"><FaGithub size={30} 
                    style={{ color: "#fff", 
                    margin: "1rem" }} /></a>
                    <a href="https://www.linkedin.com/in/john-lawrenz-abines-69b453248/"><FaLinkedin size={30} 
                    style={{ color: "#fff", 
                    margin: "1rem" }} /></a>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer