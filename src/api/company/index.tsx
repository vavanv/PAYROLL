import { API_URLS } from '../../utils/api/constants';
import { CompanyState } from '../../store/company/types';
import { fetchHandler } from '../../utils/api/request';

export const fetchCompany = (token: string): Promise<any> => {
  const path = API_URLS.company;
  return fetchHandler({
    path: path,
    token: token,
    method: 'GET',
  });
};

export const updateCompany = (token: string, data: CompanyState): Promise<any> => {
  const path = API_URLS.company;
  return fetchHandler({
    path: path,
    token: token,
    body: data,
    method: 'POST',
  });
};
