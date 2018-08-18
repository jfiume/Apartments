import { combineReducers } from 'redux';

import ApartmentReducer from './apartment_reducer';
import loadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  apartments: ApartmentReducer,
  loadingStatus: loadingReducer
});

export default RootReducer;
