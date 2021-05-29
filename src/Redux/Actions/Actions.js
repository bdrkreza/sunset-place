

export const addToCardList = (payload) => {
    return {
        type: 'ADD_TO_CARD_LIST',
        payload
    }
}

export const removeFromCardList = (payload) => {
    return {
        type: 'REMOVE_FROM_CARD_LIST',
        payload
    }
}
