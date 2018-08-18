import {
  RECEIVE_APARTMENT,
  RECEIVE_APARTMENTS
} from '../actions/apartment_actions';

const ApartmentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APARTMENT:
      const newApartment = action.apartment;
      return Object.assign({}, newApartment);
    case RECEIVE_APARTMENTS:
      return Object.assign({}, action.apartments);
    default:
      return state;
  }
};

export default ApartmentReducer;
