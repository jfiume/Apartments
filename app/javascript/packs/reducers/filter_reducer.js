import {
  FILTER_APARTMENTS
} from '../actions/filter_actions';

const initialState = {
  filtered: false
};

const FilterReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FILTER_APARTMENTS:
      return Object.assign({}, state, { filtered: true });
    default:
      return state;
  }
};

export default FilterReducer;
