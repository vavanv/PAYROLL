import { merge } from 'ramda';

import { LOGIN } from '../../../features/user/actions';

import { AnyAction } from '../../../store/types';
import { UILoginPageState } from '../../../store/ui/login-page/types';

export const initialState: UILoginPageState = {
  error: null,
};

const reducer = (state = initialState, action: AnyAction): UILoginPageState => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return merge(state, {
        error: null,
      });
    case LOGIN.SUCCESS:
      return merge(state, initialState);
    case LOGIN.FAILURE:
      return merge(state, {
        error: action.error,
      });
    default:
      return state;
  }
};

export { reducer as uiLoginPageReducer };
