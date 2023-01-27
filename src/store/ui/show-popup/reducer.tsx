import { mergeAll } from 'ramda';

import { SHOW_POPUP, HIDE_POPUP } from '../../../features/navigation/actions';
import { UIShowPopupState } from '../../../store/ui/show-popup/types';
import { AnyAction } from '../../../store/types';

export const initialState: UIShowPopupState = {
  id: 0,
  type: '',
  isOpen: false,
};

const reducer = (state = initialState, action: AnyAction): UIShowPopupState => {
  switch (action.type) {
    case SHOW_POPUP:
      return mergeAll([state, action.payload, { isOpen: true }]);
    case HIDE_POPUP:
      return initialState;
    default:
      return state;
  }
};

export { reducer as uiShowPopupReducer };
