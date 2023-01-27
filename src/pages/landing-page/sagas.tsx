import {
  submitWorkSectionRequestAction,
  SUBMIT_WORK_SECTION,
} from '../../pages/landing-page/actions';
// import { submitWorkSectionRequest } from 'src/api/profile-page/index';
import { RequestAction } from '../../store/types';

import { put, all, takeLatest } from 'redux-saga/effects';

export function* submitRequest({ params: data }: RequestAction) {
  try {
    // eslint-disable-line no-unused-vars
    // const response: { value: any } = yield call(submitWorkSectionRequest, data);
  } catch (error) {
    yield put(submitWorkSectionRequestAction.failure(error));
  }
}

export function* submitWorkSectionRequestWatcher() {
  yield all([takeLatest(SUBMIT_WORK_SECTION.REQUEST, submitRequest)]);
}
