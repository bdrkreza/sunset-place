import allRooms from "../../FakeData/FakeData.json";
import testimonialList from "../../FakeData/TestimonialData.json";

const initialState = {
    roomsList: allRooms,
};

export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CARD_LIST": {
            const newState = {
                ...state,
                roomList: [...state.roomsList, action.payload],
            };
            return newState;
        }
        case "REMOVE_FROM_CARD_LIST": {
            const newState = {
                ...state,
                roomList: state.roomsList.filter((room) => room.id !== action.payload),
            };
            return newState;
        }
        default: {
            return state;
        }
    }
};

const testimonialState = {
    statusList: testimonialList,

};

export const testimonialData = (state = testimonialState, action) => {
    switch (action.type) {
        case "REMOVE_FROM_STATUS_LIST": {
            const newState = {
                ...state,
                statusList: state.statusList.filter((room) => room.id !== action.payload),
            };
            return newState;
        }
        default: {
            return state;
        }
    }
};



