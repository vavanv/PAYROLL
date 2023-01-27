export interface Employee{
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
}

export type EmployeeList = Employee[];

export interface EmployeeListState {
  items: EmployeeList;
}
