import { UserState } from '../store/user/types';
import { UIState } from '../store/ui/types';
import { MasterListItemsState } from '../store/master-list/types';
import { CompanyState } from '../store/company/types';
import { EmployeeState } from '../store/employee/types';
import { EmployeeListState } from '../store/employee-list/types';

export type Payload = any;

export interface AppState {
  user: UserState;
  ui: UIState;
  masterList: MasterListItemsState;
  company: CompanyState;
  employee: EmployeeState;
  employeeList: EmployeeListState;
}

export interface AnyAction {
  type: string;
  params?: any;
  payload?: Payload;
  error?: string;
}

export interface RequestAction {
  type: string;
  params: any;
}

export interface SuccessAction {
  type: string;
  payload: Payload;
}

export interface FailureAction {
  type: string;
  error: any;
}

export interface AsyncActions {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
