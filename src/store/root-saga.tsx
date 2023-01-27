import { all, fork } from 'redux-saga/effects';

import { userLoginWatcher } from '../features/user/sagas';
import { masterListItemWatcher } from '../features/master-list/sagas';
import { companyWatcher } from '../features/company/sagas';
import { employeeWatcher } from '../features/employee/sagas';
import { employeeListWatcher } from '../features/employee-list/sagas';

export function* rootSaga() {
  yield all([
    fork(userLoginWatcher),
    fork(masterListItemWatcher),
    fork(companyWatcher),
    fork(employeeWatcher),
    fork(employeeListWatcher),
  ]);
}
