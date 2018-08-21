import { combineReducers } from 'redux';

import ApartmentReducer from './apartment_reducer';
import loadingReducer from './loading_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  apartments: ApartmentReducer,
  loadingStatus: loadingReducer,
  filtered: FilterReducer
});

export default RootReducer;
