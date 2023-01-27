import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import { fetchEmployeeList } from '../../api/employee-list';
import { FETCH_EMPLOYEE_LIST, fetchEmployeeListAction } from '../../features/employee-list/actions';
import { getUserToken } from '../../features/user/selectors';
import {
  showInfoAction as showInfo,
  hideInfoAction as hideInfo,
} from '../../features/navigation/actions';

export function* fetchEmployeeListRequest() {
  try {
    yield put(showInfo({ message: 'Fetching employee list ...' }));
    const token: string = yield select(getUserToken);

    const employeeList: { value: any } = yield call(fetchEmployeeList, token);
    yield put(fetchEmployeeListAction.success(employeeList));
  } catch (error) {
    yield put(fetchEmployeeListAction.failure(error));
  } finally {
    yield put(hideInfo());
  }
}

export function* employeeListWatcher() {
  yield all([takeLatest(FETCH_EMPLOYEE_LIST.REQUEST, fetchEmployeeListRequest)]);
}
