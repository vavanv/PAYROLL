import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';
import { EmployeeState } from '../../store/employee/types';

export const fetchEmployee = (token: string, id?: number): Promise<any> => {
  let path = API_URLS.employee;
  if (id) {
    path = `${path}/${id}`;
  }
  return fetchHandler({
    path: path,
    token: token,
    method: 'GET',
  });
};

export const updateEmployee = (token: string, data: EmployeeState): Promise<any> => {
  const path = API_URLS.employee;
  return fetchHandler({
    path: path,
    token: token,
    body: data,
    method: 'POST',
  });
};

export const deleteEmployee = (token: string, id: number): Promise<any> => {
  let path = API_URLS.employeeDelete;
  path = `${path}/${id}`;
  return fetchHandler({
    path: path,
    token: token,
    method: 'POST',
  });
};

export const restoreEmployee = (token: string, id: number): Promise<any> => {
  let path = API_URLS.employeeRestore;
  path = `${path}/${id}`;
  return fetchHandler({
    path: path,
    token: token,
    method: 'POST',
  });
};
