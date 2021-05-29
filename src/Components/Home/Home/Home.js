import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header/Header';
import Rooms from '../Rooms/Rooms/Rooms';

import Testimonial from '../Testimonial/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Rooms />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;