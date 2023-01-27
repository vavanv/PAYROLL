import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchEmployeeList = (token: string): Promise<any> => {
  const path = API_URLS.employeeList;
  return fetchHandler({
    path: path,
    token: token,
    method: 'GET',
  });
};
