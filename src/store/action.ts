import { createAction } from '@reduxjs/toolkit';
import { City, FullOffer, Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

export const changeCity = createAction<City>('city/change');

export const loadOffers = createAction<Offer[]>('offers/load');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadCurrentOffer = createAction<FullOffer | null>('offer/loadCurrentOffer');

export const loadNearbyOffers = createAction<Offer[]>('offer/loadNearbyOffers');

export const loadReviews = createAction<Review[]>('offer/loadReviews');

export const addReview = createAction<Review>('offer/addReview');

export const setCurrentOfferLoadingStatus = createAction<boolean>('offer/setCurrentOfferLoadingStatus');

export const setOfferNotFoundStatus = createAction<boolean>('offer/setOfferNotFoundStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserData');
