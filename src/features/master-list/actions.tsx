import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_MASTER_LIST_ITEMS = createRequestTypes('FETCH_MASTER_LIST_ITEMS');
export const fetchMasterListItemsAction = asyncActionCreators(FETCH_MASTER_LIST_ITEMS);
