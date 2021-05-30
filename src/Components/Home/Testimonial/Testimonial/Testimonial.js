import React from 'react';
import { useSelector } from 'react-redux';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css'

const Testimonial = () => {
    const data = useSelector((state) => {
        return state.status.statusList;
    })
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
<<<<<<< HEAD
                        <TestimonialCard></TestimonialCard>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <TestimonialCard></TestimonialCard>
                    </div>

                    <div class="carousel-item">
                        <TestimonialCard></TestimonialCard>
=======
                        {
                            data.map(data => <TestimonialCard data={data} />)
                        }
>>>>>>> 5e3372e52473f79b6e8aea77ebbfc4023248d438
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>

    );
};

export default Testimonial;