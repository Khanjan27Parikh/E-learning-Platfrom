import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>LIVDO</div>
                <div className='footer-links'>
                    <a href='#'>Home</a>
                    <a href='#'>Course</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className='social-media'>
                    <h3 className='footer-heading'>Follow us</h3>
                    <div className='media-icons'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>
                <div className='call'>
                    <h3 className='call-heading'>Call us</h3>
                    <div className='call-no'>
                        <FaPhone /> <span>9328582436</span>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='cpright'>
                    <p> <span>&copy;</span> LIVDO - 2022 </p>
                </div>
            </div>
        </>
    );
}

export default Footer;