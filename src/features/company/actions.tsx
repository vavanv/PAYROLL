import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_COMPANY = createRequestTypes('FETCH_COMPANY');
export const fetchCompanyAction = asyncActionCreators(FETCH_COMPANY);

export const UPDATE_COMPANY = createRequestTypes('UPDATE_COMPANY');
export const updateCompanyAction = asyncActionCreators(UPDATE_COMPANY);
