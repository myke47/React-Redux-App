import axios from 'axios';
export const MAKE_GOAT = "MAKE_GOAT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

// This is known as the action creator.
export const makeGoat = () => dispatch => {
	dispatch({ type: FETCH_TOGGLE });
	axios.get('https://placegoat.com/goatse/200/200')
		.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.quote }))
		.catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }))
};