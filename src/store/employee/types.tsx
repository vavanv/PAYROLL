export interface EmployeeState {
  id?: number;
  userId?: number;
  username?: string;
  password?: string;
  userEnabled: boolean;
  userRightId?: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate: Date;
  sin: string;
  email: string;
  dateOfHire: Date;
  departmentId: number;
  positionId: number;
  wageTypeId: number;
  vacationPolicyId: number;
  vacationRate: number;
  addressId?: number;
  street: string;
  city: string;
  provinceId: number;
  postalCode: string;
  isDeleted: boolean;
}
