import { createReducer } from '@reduxjs/toolkit';
import { City, FullOffer, Offer } from '../types/offer';
import { AuthorizationStatus, CITIES } from '../const';
import {
  addReview,
  changeCity,
  loadCurrentOffer,
  loadNearbyOffers,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setCurrentOfferLoadingStatus,
  setOfferNotFoundStatus,
  setOffersDataLoadingStatus,
  setUserData,
} from './action';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  currentOffer: FullOffer | null;
  nearbyOffers: Offer[];
  reviews: Review[];
  isCurrentOfferLoading: boolean;
  isOfferNotFound: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  isCurrentOfferLoading: false,
  isOfferNotFound: false,
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
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setOfferNotFoundStatus, (state, action) => {
      state.isOfferNotFound = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
