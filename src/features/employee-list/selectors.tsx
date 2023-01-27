import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { EmployeeListState, EmployeeList } from '../../store/employee-list/types';

export const getEmployeeList = (state: AppState): EmployeeListState => state.employeeList;

export const getEmployeeListInfo = createSelector(
  getEmployeeList,
  (employeeList: EmployeeListState): EmployeeList => employeeList.items,
);
