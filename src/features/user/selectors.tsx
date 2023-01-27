import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { UserState, UserCulture } from '../../store/user/types';

export const getUserState = (state: AppState): UserState => state.user;

export const getUserInfo = createSelector(getUserState, (user: UserState) => user);

export const getUserCulture = createSelector(
  getUserState,
  (user: UserState): UserCulture => user.culture,
);

export const getUserCultureCode = createSelector(
  getUserCulture,
  (culture: UserCulture): string => culture.cultureCode,
);

export const isUserAuthenticated = createSelector(
  getUserState,
  (user: UserState): boolean => user.authenticated,
);

export const isAdministrator = createSelector(
  getUserState,
  (user: UserState): boolean => user.isAdministrator,
);

export const getUserToken = createSelector(
  getUserState,
  (user: UserState): string => `Bearer ${user.token}`,
);
