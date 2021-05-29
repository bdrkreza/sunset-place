import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <header id="home">
                <div class="small-container">
                    {/* <form class="main-font-family text-center">
                        <input type="search" />
                        <i> <FontAwesomeIcon icon={faSearch} /></i>
                        <input type="submit" value="Search" />
                    </form> */}
                    <div class="row">
                        <div class="col-lg-4 col-12 lobster-font-family d-flex align-items-center">
                            <h2>It is a long established fact that a reader will be distracted by the readablen</h2>
                            <button><a href="#">About hotel</a></button>
                        </div>
                    </div>
                    <div class="h-slider roboto-font-family welcome d-flex align-items-center justify-content-center">
                        <h1 class="text-capitalize">Welcome to <br /><span>Sunset Place</span></h1>
                        <div id="headerslider" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item carousel-three active"></div>
                                <div class="carousel-item carousel-two"></div>
                                <div class="carousel-item carousel-one"></div>
                            </div>
                            <a class="carousel-control-prev" href="#headerslider" role="button" data-slide="prev">
                                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#headerslider" role="button" data-slide="next">
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="st-rec"></div>
                <div class="rd-rec"></div>
            </header>
        </div>
    );
};

export default Header;