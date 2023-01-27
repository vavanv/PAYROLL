export interface UserCulture {
  cultureCode: string;
}

export interface UserState {
  token: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  culture: UserCulture;
  authenticated: boolean;
  isAdministrator: boolean;
}
