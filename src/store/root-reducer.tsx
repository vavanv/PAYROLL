import { combineReducers } from 'redux';

import { AppState } from '../store/types';
import { userReducer, initialState as initialUserState } from '../features/user/reducer';
import { initialUIState, uiReducer } from '../store/ui/reducer';
import {
  initialState as initialMasterListItemsState,
  masterListItemReducer,
} from '../features/master-list/reducer';
import { initialState as initialCompanyState, companyReducer } from '../features/company/reducer';
import {
  initialState as initialEmployeeState,
  employeeReducer,
} from '../features/employee/reducer';
import {
  initialState as initialEmployeeListState,
  employeeListReducer,
} from '../features/employee-list/reducer';

export const initialState: AppState = {
  user: initialUserState,
  ui: initialUIState,
  masterList: initialMasterListItemsState,
  company: initialCompanyState,
  employee: initialEmployeeState,
  employeeList: initialEmployeeListState,
};

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  masterList: masterListItemReducer,
  company: companyReducer,
  employee: employeeReducer,
  employeeList: employeeListReducer,
});
