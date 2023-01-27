import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import { fetchEmployee, updateEmployee, deleteEmployee, restoreEmployee } from '../../api/employee';
import { RequestAction } from '../../store/types';
import {
  FETCH_EMPLOYEE,
  fetchEmployeeAction,
  UPDATE_EMPLOYEE,
  updateEmployeeAction,
  DELETE_EMPLOYEE,
  deleteEmployeeAction,
  RESTORE_EMPLOYEE,
  restoreEmployeeAction,
} from '../../features/employee/actions';
import { hidePopupAction } from '../../features/navigation/actions';
import { getUserToken } from '../../features/user/selectors';
import { getShowPopupId } from '../../features/ui/selectors';
import { fetchEmployeeListAction } from '../../features/employee-list/actions';
import { fetchEmployeeList } from '../../api/employee-list';
import { EmployeeState } from '../../store/employee/types';
import { EmployeeList } from '../../store/employee-list/types';

export function* fetchEmployeeRequest() {
  try {
    const id: number = yield select(getShowPopupId);
    if (!id || id === 0) {
      yield put(fetchEmployeeAction.failure(null));
    }
    const token: string = yield select(getUserToken);

    const employee: { value: EmployeeState } = yield call(fetchEmployee, token, id);
    yield put(fetchEmployeeAction.success(employee));
  } catch (error) {
    yield put(fetchEmployeeAction.failure(error));
  }
}

export function* updateEmployeeRequest({ params: data }: RequestAction) {
  try {
    const token: string = yield select(getUserToken);

    const response: { value: any } = yield call(updateEmployee, token, data);
    yield put(updateEmployeeAction.success(response));

    // Reload list of employee
    const employeeList: { value: EmployeeList } = yield call(fetchEmployeeList, token);
    yield put(fetchEmployeeListAction.success(employeeList));
  } catch (error) {
    yield put(updateEmployeeAction.failure(error));
  } finally {
    yield put(hidePopupAction());
  }
}

export function* deleteEmployeeRequest({ params: id }: RequestAction) {
  try {
    const token: string = yield select(getUserToken);

    yield call(deleteEmployee, token, id);
    yield put(deleteEmployeeAction.success(null));

    // Reload list of employee
    const employeeList: { value: any } = yield call(fetchEmployeeList, token);
    yield put(fetchEmployeeListAction.success(employeeList));
  } catch (error) {
    yield put(deleteEmployeeAction.failure(error));
  } finally {
    yield put(hidePopupAction());
  }
}

export function* restoreEmployeeRequest({ params: id }: RequestAction) {
  try {
    const token: string = yield select(getUserToken);

    const response: { value: any } = yield call(restoreEmployee, token, id);
    yield put(restoreEmployeeAction.success(response));
    yield put(hidePopupAction());
  } catch (error) {
    yield put(restoreEmployeeAction.failure(error));
  }
}

export function* employeeWatcher() {
  yield all([
    takeLatest(FETCH_EMPLOYEE.REQUEST, fetchEmployeeRequest),
    takeLatest(UPDATE_EMPLOYEE.REQUEST, updateEmployeeRequest),
    takeLatest(DELETE_EMPLOYEE.REQUEST, deleteEmployeeRequest),
    takeLatest(RESTORE_EMPLOYEE.REQUEST, restoreEmployeeRequest),
  ]);
}
