import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import { fetchCompany, updateCompany } from '../../api/company';
import { RequestAction } from '../../store/types';
import {
  FETCH_COMPANY,
  fetchCompanyAction,
  UPDATE_COMPANY,
  updateCompanyAction,
} from '../../features/company/actions';
import { getUserToken } from '../../features/user/selectors';

export function* fetchCompanyRequest() {
  try {
    const token: string = yield select(getUserToken);

    const company: { value: any } = yield call(fetchCompany, token);
    yield put(fetchCompanyAction.success(company));
  } catch (error) {
    yield put(fetchCompanyAction.failure(error));
  }
}

export function* updateCompanyRequest({ params: data }: RequestAction) {
  try {
    const token: string = yield select(getUserToken);

    const response: { value: any } = yield call(updateCompany, token, data);
    yield put(updateCompanyAction.success(response));
  } catch (error) {
    yield put(updateCompanyAction.failure(error));
  }
}

export function* companyWatcher() {
  yield all([
    takeLatest(FETCH_COMPANY.REQUEST, fetchCompanyRequest),
    takeLatest(UPDATE_COMPANY.REQUEST, updateCompanyRequest),
  ]);
}
