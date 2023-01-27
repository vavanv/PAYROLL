import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EmployeeFormComponent } from '../../../pages/employee-page/employee-form/component';
import {
  updateEmployeeAction as updateEmployee,
  fetchEmployeeAction as fetchEmployee,
  deleteEmployeeAction as deleteEmployee,
} from '../../../features/employee/actions';
import { hidePopupAction as hidePopup } from '../../../features/navigation/actions';
import {
  getMasterListProvinces,
  getMasterListWageDepartments,
  getMasterListWageTypes,
  getMasterListVacationPolicies,
  getMasterListPositions,
} from '../../../features/master-list/selectors';
import { isShowPopup } from '../../../features/ui/selectors';
import { getEmployeeInfo } from '../../../features/employee/selectors';
import { AppState } from '../../../store/types';
import { EmployeeState } from '../../../store/employee/types';
import { MasterListItems } from '../../../store/master-list/types';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    employee: EmployeeState;
    provinces: MasterListItems;
    departments: MasterListItems;
    wageTypes: MasterListItems;
    vacationPolicies: MasterListItems;
    positions: MasterListItems;
    isShowPopup: boolean;
  }
>({
  employee: getEmployeeInfo,
  provinces: getMasterListProvinces,
  departments: getMasterListWageDepartments,
  wageTypes: getMasterListWageTypes,
  vacationPolicies: getMasterListVacationPolicies,
  positions: getMasterListPositions,
  isShowPopup: isShowPopup,
});

const mapDispatchToProps = {
  updateEmployee: updateEmployee.request,
  fetchEmployee: fetchEmployee.request,
  deleteEmployee: deleteEmployee.request,
  hidePopup,
};

export const EmployeeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeFormComponent);
