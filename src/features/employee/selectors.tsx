import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { EmployeeState } from '../../store/employee/types';

export const getEmployee = (state: AppState): EmployeeState => state.employee;

export const getEmployeeInfo = createSelector(getEmployee, (employee: EmployeeState) => employee);
