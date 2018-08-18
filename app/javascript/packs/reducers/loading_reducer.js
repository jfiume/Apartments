import {
  RECEIVE_APARTMENT,
  RECEIVE_APARTMENTS,
  START_LOADING_APARTMENT,
  START_LOADING_APARTMENTS
} from '../actions/apartment_actions';

const initialState = {
  loadingApartment: false,
  loadingApartments: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APARTMENTS:
      return Object.assign({}, state, { loadingApartments: false });
    case RECEIVE_APARTMENT:
      return Object.assign({}, state, { loadingApartment: false });
    case START_LOADING_APARTMENTS:
      return Object.assign({}, state, { loadingApartments: true });
    case START_LOADING_APARTMENT:
      return Object.assign({}, state, { loadingApartment: true });
    default:
      return state;
  }
};

export default loadingReducer;
