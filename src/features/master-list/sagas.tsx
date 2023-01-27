import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import {
  FETCH_MASTER_LIST_ITEMS,
  fetchMasterListItemsAction,
} from '../../features/master-list/actions';
import { getUserToken } from '../../features/user/selectors';

import { fetchMasterListAllItems } from '../../api/master-list';

export function* requestMasterListCountries() {
  try {
    const token: string = yield select(getUserToken);

    const response: { value: any } = yield call(fetchMasterListAllItems, token);
    yield put(fetchMasterListItemsAction.success(response));
  } catch (error) {
    yield put(fetchMasterListItemsAction.failure(error));
  }
}

export function* masterListItemWatcher() {
  yield all([takeLatest(FETCH_MASTER_LIST_ITEMS.REQUEST, requestMasterListCountries)]);
}
