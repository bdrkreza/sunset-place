import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../image/Header2.jpg'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div class="card  text-white card-footer ">
                <img src={image} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <div class="hero">
                        <footer class="noto-font-family ">
                            <div class="overlay">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6  col-12">
                                            <h3>Useful links</h3>
                                            <ul class="text-capitalize">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Rooms</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Contacts</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12">
                                            <h3>Find us</h3>
                                            <p>Healing Center, 176 W Street name,<br />
                                    New York, NY 10014, US<br />
                                        (+71) 987 654 3210<br />
                                            (+71) 987 654 3210<br />
                                                fivehotel@gmail.com
                            </p>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 form">
                                            <h3>News letter</h3>
                                            <form>
                                                <input type="email" placeholder="Email" />
                                                <input type="submit" />
                                            </form>
                                            <ul>
                                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                        <div class="copyright noto-font-family">
                            <p>© 2019 All Rights Reserved. by Sunset Place</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;