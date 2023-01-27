import { assoc } from 'ramda';

import { FETCH_COMPANY, UPDATE_COMPANY } from '../../../features/company/actions';
import { FETCH_EMPLOYEE, UPDATE_EMPLOYEE } from '../../../features/employee/actions';
import { UINavBarState } from '../../../store/ui/nav-bar/types';
import { AnyAction } from '../../../store/types';

export const initialState: UINavBarState = {
  loading: false,
};

const reducer = (state = initialState, action: AnyAction): UINavBarState => {
  switch (action.type) {
    case FETCH_COMPANY.REQUEST:
    case UPDATE_COMPANY.REQUEST:
    case FETCH_EMPLOYEE.REQUEST:
      return assoc('loading', true, state);
    case FETCH_COMPANY.SUCCESS:
    case FETCH_COMPANY.FAILURE:
    case UPDATE_COMPANY.SUCCESS:
    case UPDATE_COMPANY.FAILURE:
    case FETCH_EMPLOYEE.SUCCESS:
    case FETCH_EMPLOYEE.FAILURE:
    case UPDATE_EMPLOYEE.SUCCESS:
    case UPDATE_EMPLOYEE.FAILURE:
      return assoc('loading', false, state);
    default:
      return initialState;
  }
};

export { reducer as uiNavBarReducer };
