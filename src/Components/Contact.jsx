import React from 'react';
import Navbar from './Homepage/Navbar';
import Footer from './Homepage/Footer';
import { FaPhoneAlt, FaMapMarked, FaEnvelope } from "react-icons/fa";


function Contact() {
    return (
        <>
            <Navbar />
            <section className='contact'>
                <div className='content'>
                    <h2>Contact Us</h2>
                    <p>If you have query regarding the course, feel free to contact us on the below details and send your query</p>
                </div>
                <div className='container'>
                    <div className='contact_info'>
                        <div className='box'>
                            <div className='contact_icon'> <FaMapMarked /> </div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>SRM University, Kattankulathur, Chennai</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='contact_icon'> <FaPhoneAlt /> </div>
                            <div className='text'>
                                <h3>Phone</h3>
                                <p>9328582436</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='contact_icon'> <FaEnvelope /> </div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>developerkhanju09@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_form'>
                            <form>
                                <h2>Send Message</h2>
                                <div className='input_box'>
                                    <input type='text' name='' required />
                                    <span>Full Name</span>
                                </div>
                                <div className='input_box'>
                                    <input type='text' name='' required />
                                    <span>Email</span>
                                </div>
                                <div className='input_box'>
                                    <textarea required></textarea>
                                    <span>Type your Message</span>
                                </div>
                                <div className='input_box'>
                                    <input type='submit' name='' value='send' />
                                </div>
                            </form>
                        </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;