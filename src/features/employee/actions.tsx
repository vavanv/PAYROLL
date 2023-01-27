import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_EMPLOYEE = createRequestTypes('FETCH_EMPLOYEE');
export const fetchEmployeeAction = asyncActionCreators(FETCH_EMPLOYEE);

export const UPDATE_EMPLOYEE = createRequestTypes('UPDATE_EMPLOYEE');
export const updateEmployeeAction = asyncActionCreators(UPDATE_EMPLOYEE);

export const DELETE_EMPLOYEE = createRequestTypes('DELETE_EMPLOYEE');
export const deleteEmployeeAction = asyncActionCreators(DELETE_EMPLOYEE);

export const RESTORE_EMPLOYEE = createRequestTypes('RESTORE_EMPLOYEE');
export const restoreEmployeeAction = asyncActionCreators(RESTORE_EMPLOYEE);
