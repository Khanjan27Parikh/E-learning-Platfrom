import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer_logo'>TECHNOSTACK</div>
                <div className='footer_links'>
                    <NavLink to='/' activeClassName='active_class'>Home</NavLink>
                    <NavLink to='#' activeClassName='active_class'>Course</NavLink>
                    <NavLink to='#' activeClassName='active_class'>Blog</NavLink>
                    <NavLink to='/contact' activeClassName='active_class'>Contact Us</NavLink>
                </div>
                <div className='social_media'>
                    <h3 className='footer_heading'>Follow us</h3>
                    <div className='media_icons'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>
                <div className='call'>
                    <h3 className='call_heading'>Call us</h3>
                    <div className='call_no'>
                        <FaPhoneAlt /> <span>9328582436</span>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='cpright'>
                    <p> <span>&copy;</span> TECHNOSTACK - 2023 </p>
                </div>
            </div>
        </>
    );
}

export default Footer;