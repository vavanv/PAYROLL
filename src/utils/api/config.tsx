export const API_BASE_URL = 'http://localhost/payroll2.api/api';
// export const API_BASE_URL = 'https://www.payrollapitech.net/payroll2.api/api';

export interface TAppConfig {
  baseApiUrl: string;
}

function getAppConfig(): TAppConfig {
  return {
    baseApiUrl: API_BASE_URL,
  };
}

export function getEnvConfig(): TAppConfig {
  return getAppConfig();
}
