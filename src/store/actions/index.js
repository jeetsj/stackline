import axios from 'axios';
import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from '../../constants';

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSuccess = products => ({
    type: FETCH_SUCCESS,
    payload: { products }
});

export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});

export const getProducts = (FAKE_ENDPOINT) => {
    return (dispatch) => {
        dispatch(fetchBegin());

        return axios.get(FAKE_ENDPOINT)
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchFailure(err))
            });
    };
}
