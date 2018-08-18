import * as apartmentUtil from '../util/apartment_util';

export const RECEIVE_APARTMENT = 'RECEIVE_APARTMENT';
export const RECEIVE_APARTMENTS = 'RECEIVE_APARTMENTS';
export const START_LOADING_APARTMENT = 'START_LOADING_APARTMENT';
export const START_LOADING_APARTMENTS = 'START_LOADING_APARTMENTS';

export const receiveApartment = apartment => ({
  type: RECEIVE_APARTMENT,
  apartment
});

export const receiveApartments = apartments => ({
  type: RECEIVE_APARTMENTS,
  apartments
});

export const startLoadingApartment = () => ({
  type: START_LOADING_APARTMENT
});

export const startLoadingApartments = () => ({
  type: START_LOADING_APARTMENTS
});

export const fetchApartments = () => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingApartments());
  apartmentUtil.fetchApartments().then(apartments => (
    dispatch(receiveApartments(apartments))
  ))
};

export const fetchApartment = (id) => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingApartment());
  apartmentUtil.fetchApartment(id).then(apartment => (
    dispatch(receiveApartments(apartment))
  ))
};

export const updateApartment = (id) => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingApartment());
  apartmentUtil.updateApartment(id).then(apartment => (
    dispatch(receiveApartment(apartment))
  ))
};

export const createApartment = (apartment) => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingApartment());
  apartmentUtil.createApartment(apartment).then(apartment => (
    dispatch(receiveApartment(apartment))
  ))
};

export const searchApartments = (query) => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingApartments());
  apartmentUtil.searchApartments(query).then(apartments => (
    dispatch(receiveApartments())
  ))
};
