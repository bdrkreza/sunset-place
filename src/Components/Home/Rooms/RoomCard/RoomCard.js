import React from 'react';
import './RoomCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const RoomCard = ({ data }) => {
    console.log(data)
    const { img, size, day, room, price } = data;
    return (
        <>
            <div class="wrapper col-md-4">
                <h1>Cox's-Bazar</h1>
                <div class="image i1">
                    <img src={img} alt="" />
                </div>
                <div class="details">
                    <span class="checked"><FontAwesomeIcon icon={faStar} /></span>
                    <span class="checked"><FontAwesomeIcon icon={faStar} /></span>
                    <span class="checked"><FontAwesomeIcon icon={faStar} /></span>
                    <span class="checked"><FontAwesomeIcon icon={faStar} /></span>
                    <span class="checked"><FontAwesomeIcon icon={faStar} /></span>
                    <h1><em>{room}</em></h1>
                    <h2>Size:{size}</h2>
                    <p>{day}</p>
                </div>
                <h1>£{price}</h1>
                {/* <button className='btn bg-dark-gray border'>Explore</button> */}
                <Link to="/checkout"><button className="Explore-btn"><span>Book Now</span></button></Link>
            </div>
        </>
    );
};

export default RoomCard;