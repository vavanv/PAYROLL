import { mergeAll } from 'ramda';

import { LOGOUT } from '../../features/user/actions';
import { EmployeeState } from '../../store/employee/types';
import { AnyAction } from '../../store/types';
import { FETCH_EMPLOYEE, DELETE_EMPLOYEE, RESTORE_EMPLOYEE } from './actions';

export const initialState: EmployeeState = {
  id: 0,
  userId: 0,
  username: '',
  password: '',
  userEnabled: false,
  userRightId: 0,
  firstName: '',
  lastName: '',
  middleName: '',
  birthDate: new Date(),
  sin: '',
  email: '',
  dateOfHire: new Date(),
  departmentId: 0,
  wageTypeId: 0,
  vacationPolicyId: 0,
  vacationRate: 0,
  addressId: 0,
  positionId: 0,
  street: '',
  city: '',
  provinceId: 0,
  postalCode: '',
  isDeleted: false,
};

const reducer = (state = initialState, action: AnyAction): EmployeeState => {
  switch (action.type) {
    case FETCH_EMPLOYEE.SUCCESS: {
      return mergeAll([state, action.payload]);
    }
    case LOGOUT:
    case DELETE_EMPLOYEE.SUCCESS:
    case DELETE_EMPLOYEE.FAILURE:
    case RESTORE_EMPLOYEE.SUCCESS:
    case RESTORE_EMPLOYEE.FAILURE:
    case FETCH_EMPLOYEE.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as employeeReducer };
