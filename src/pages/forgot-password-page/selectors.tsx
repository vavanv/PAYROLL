import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { UserState, UserCulture } from '../../store/user/types';

export const getUser = (state: AppState): UserState => state.user;

export const getUserInfo = createSelector(getUser, (user: UserState) => user);

export const getUserCulture = createSelector(
  getUser,
  (user: UserState): UserCulture => user.culture,
);

export const getUserCultureCode = createSelector(
  getUserCulture,
  (culture: UserCulture): string => culture.cultureCode,
);

export const isUserAuthenticated = createSelector(
  getUser,
  (user: UserState): boolean => user.authenticated,
);

export const getUserToken = createSelector(
  getUser,
  (user: UserState): string => `Bearer ${user.token}`,
);
