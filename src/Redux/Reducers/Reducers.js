import allRooms from "../../FakeData/FakeData.json";

const initialState = {
    roomsList: allRooms,

};

const roomReducer = (state = initialState, action) => {
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

export default roomReducer;
