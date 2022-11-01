import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import Footer from './Footer';

function Homepage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CardSection />
            <Footer />
        </>
    );
}

export default Homepage;