import base64 from 'base-64';

import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export function getAuthorizationHeader(username: string, password: string): string {
  const encodedCredentials = base64.encode(`${username}:${password}`);
  return `Basic ${encodedCredentials}`;
}

export const fetchToken = (data: any): Promise<any> => {
  const path = API_URLS.token;
  const authCredentials = getAuthorizationHeader(data.username, data.password);
  return fetchHandler({
    path: path,
    headers: { Tenant: data.company },
    authCredentials: authCredentials,
    method: 'POST',
  });
};

export const fetchUser = (token: string): Promise<any> => {
  const path = API_URLS.user;
  return fetchHandler({
    path: path,
    token: token,
    method: 'GET',
  });
};
