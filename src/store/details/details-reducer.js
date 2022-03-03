import {SET_ERROR, SET_LOADING, SET_COUNTRY, CLEAR_CURRENT_COUNTRY, SET_NEIGHBORS} from "./details-action";

const initialState = {
    currentCountry : null,
    status: 'idle',
    error: null,
    neighbors: [],
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_LOADING: {
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        }
        case SET_ERROR: {
            return {
                 ...state,
                status: 'rejected',
                error: payload
            }
        }
        case SET_COUNTRY: {
             return {
                 ...state,
                 status: 'received',
                 currentCountry: payload
             }
        }
        case CLEAR_CURRENT_COUNTRY: {
            return {
                ...state,
                currentCountry: ''
            }
        }
        case SET_NEIGHBORS: {
            return {
                ...state,
                neighbors: payload,
            }
        }
        default:
            return state
    }
}