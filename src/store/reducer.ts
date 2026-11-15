import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus, CITIES } from '../const';
import {
  changeCity,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setUserData,
} from './action';
import { UserData } from '../types/user-data';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
