import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const LOGIN = createRequestTypes('LOGIN');
export const loginAction = asyncActionCreators(LOGIN);

export const LOGOUT = 'LOGOUT';
export const logoutAction = () => ({
  type: LOGOUT,
});

export const PASSWORD = createRequestTypes('PASSWORD');
export const passwordAction = asyncActionCreators(PASSWORD);
