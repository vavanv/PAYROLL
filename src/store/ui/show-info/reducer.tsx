import { mergeAll } from 'ramda';

import { SHOW_INFO, HIDE_INFO } from '../../../features/navigation/actions';
import { UIShowInfoState } from '../../../store/ui/show-info/types';
import { AnyAction } from '../../../store/types';

export const initialState: UIShowInfoState = {
  message: '',
  isOpen: false,
};

const reducer = (state = initialState, action: AnyAction): UIShowInfoState => {
  switch (action.type) {
    case SHOW_INFO:
      return mergeAll([state, action.payload, { isOpen: true }]);
    case HIDE_INFO:
    default:
      return initialState;
  }
};

export { reducer as uiShowInfoReducer };
