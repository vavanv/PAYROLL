import { mergeRight } from 'ramda';

import { SELECT_LANGUAGE } from '../../features/intl/actions';
import { UserState } from '../../store/user/types';
import { AnyAction } from '../../store/types';
import { LOCALE, getLanguage } from '../../locales/index';
import { LOGIN, LOGOUT, FETCH_USER } from './actions';

export const initialState: UserState = {
  token: '',
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  culture: {
    cultureCode: getLanguage(),
  },
  authenticated: false,
  isAdministrator: false,
};

const reducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      localStorage.setItem(LOCALE, action.payload);

      return mergeRight(state, {
        culture: {
          cultureCode: action.payload,
        },
      });
    }
    case LOGIN.SUCCESS: {
      return mergeRight(state, {
        token: action.payload,
        authenticated: true,
      });
    }
    case FETCH_USER.SUCCESS: {
      return mergeRight(state, {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        isAdministrator: action.payload.isAdministrator,
      });
    }
    case LOGOUT:
      return initialState;
    case LOGIN.FAILURE:
      return mergeRight(state, {
        authenticated: false,
      });
    default:
      return state;
  }
};

export { reducer as userReducer };
