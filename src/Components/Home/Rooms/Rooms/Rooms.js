import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RoomCard from '../RoomCard/RoomCard';
import './Rooms.css'


const Rooms = () => {
    const roomData = useSelector((state) => {
        return state.rooms.roomsList;
    })
    console.log(roomData)
    return (
        <div class="row">
            {
                roomData?.map(data => <RoomCard data={data} />)
            }
        </div>
    );
};

export default Rooms;