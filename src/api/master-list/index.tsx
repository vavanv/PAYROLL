import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchMasterListAllItems = (token: string): Promise<any> => {
  const path = API_URLS.masterList;
  return fetchHandler({
    path: path,
    token: token,
    method: 'GET',
  });
};
