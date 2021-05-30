import React from 'react';
import './Navbar.css'
import logo from '../../../image/icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <img src={logo} alt="" />
                      Sunset-Place
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <Link to='/home'>Home</Link>
                    <Link to='/service'>Services</Link>
                    <Link to='/room'>Room</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;