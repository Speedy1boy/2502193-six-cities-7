import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { CITIES } from '../const';
import { changeCity, loadOffers, setOffersDataLoadingStatus } from './action';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
