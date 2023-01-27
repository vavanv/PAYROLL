import { assoc } from 'ramda';

import { LOGOUT } from '../../features/user/actions';
import { AnyAction } from '../../store/types';
import { EmployeeListState } from '../../store/employee-list/types';
import { FETCH_EMPLOYEE_LIST } from './actions';

export const initialState: EmployeeListState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): EmployeeListState => {
  switch (action.type) {
    case FETCH_EMPLOYEE_LIST.SUCCESS:
      return assoc('items', action.payload, state);
    case LOGOUT:
    case FETCH_EMPLOYEE_LIST.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as employeeListReducer };
