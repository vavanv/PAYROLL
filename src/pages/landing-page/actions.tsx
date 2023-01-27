import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const SUBMIT_WORK_SECTION = createRequestTypes('SUBMIT_WORK_SECTION');
export const submitWorkSectionRequestAction = asyncActionCreators(SUBMIT_WORK_SECTION);
