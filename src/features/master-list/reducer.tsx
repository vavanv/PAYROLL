import { assoc } from 'ramda';

import { LOGOUT } from '../../features/user/actions';
import { AnyAction } from '../../store/types';
import { MasterListItemsState } from '../../store/master-list/types';
import { FETCH_MASTER_LIST_ITEMS } from './actions';

export const initialState: MasterListItemsState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): MasterListItemsState => {
  switch (action.type) {
    case FETCH_MASTER_LIST_ITEMS.SUCCESS:
      return assoc('items', action.payload, state);
    case LOGOUT:
    case FETCH_MASTER_LIST_ITEMS.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as masterListItemReducer };
