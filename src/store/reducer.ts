import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { City, Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
