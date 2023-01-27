import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import history from '../../app/app/history';
import { fetchToken, fetchUser } from '../../api/user';
import { LOGIN, loginAction, fetchUserAction } from '../../features/user/actions';
import { RequestAction } from '../../store/types';
import { fetchMasterListItemsAction } from '../../features/master-list/actions';
import { fetchMasterListAllItems } from '../../api/master-list';
import { getUserToken } from '../../features/user/selectors';
import { ROUTE_ROOT } from '../../app/app/constants';
import {
  showInfoAction as showInfo,
  hideInfoAction as hideInfo,
} from '../../features/navigation/actions';

export function* requestUserLogin({ params: data }: RequestAction) {
  try {
    yield put(showInfo({ message: 'Login to Web payroll ...' }));
    const response: { value: any } = yield call(fetchToken, data);
    yield put(loginAction.success(response));

    const token: string = yield select(getUserToken);
    const user: { value: any } = yield call(fetchUser, token);
    yield put(fetchUserAction.success(user));

    const items: { value: any } = yield call(fetchMasterListAllItems, token);
    yield put(fetchMasterListItemsAction.success(items));

    yield call(history.push, ROUTE_ROOT);
  } catch (error) {
    yield put(loginAction.failure(error));
  } finally {
    yield put(hideInfo());
  }
}

export function* userLoginWatcher() {
  yield all([takeLatest(LOGIN.REQUEST, requestUserLogin)]);
}
