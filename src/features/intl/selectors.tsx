import { createSelector } from 'reselect';

import { getUserState } from '../../features/user/selectors';
import { getLocaleMessages } from '../../locales';

export const selectUserCulture = createSelector(getUserState, user => user.culture);

export const selectUserCultureCode = createSelector(
  selectUserCulture,
  culture => culture.cultureCode,
);

export const selectMessages = createSelector(selectUserCultureCode, getLocaleMessages);
