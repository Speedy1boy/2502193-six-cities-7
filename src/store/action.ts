import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<City>('city/change');

export const loadOffers = createAction<Offer[]>('offers/load');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserData');
