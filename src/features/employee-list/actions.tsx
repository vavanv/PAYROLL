import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_EMPLOYEE_LIST = createRequestTypes('FETCH_EMPLOYEE_LIST');
export const fetchEmployeeListAction = asyncActionCreators(FETCH_EMPLOYEE_LIST);
