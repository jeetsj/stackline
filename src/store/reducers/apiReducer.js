import _ from 'lodash';
import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './../../constants';
import json from './../../data.json';


const initialState = {
    error: null,
    json: _.first(json),
    products: [],
    loading: false,
};

export default function apiReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            };

        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                products: []
            };

        default:
            return state;
    }
}