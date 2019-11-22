import { MAKE_GOAT } from "./actions/index.js";
import { FETCH_TOGGLE, FETCH_SUCCESS } from './actions/index.js';

const initialState = {
  date: Date.now(),
  makeagoat: '',
  error: '',
  isFetching: false
};

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GOAT:
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};

const asyncReducer = (state = initialState, action) => {
	switch(action.type){
		case FETCH_TOGGLE:
			return {
				...state,
				isFetching: !state.isFetching,
				error: action.payload ? action.payload : ''
			}
		case FETCH_SUCCESS:
			return {
				...state,
				makeagoat: action.payload,
				isFetching: false,
				error: ''
		default:
				return state;
	}
};

export default newReducer;
export default asyncReducer;