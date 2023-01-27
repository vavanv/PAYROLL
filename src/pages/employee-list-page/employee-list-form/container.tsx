import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EmployeeListFormComponent } from '../../../pages/employee-list-page/employee-list-form/component';
import { fetchEmployeeListAction } from '../../../features/employee-list/actions';
import { getEmployeeListInfo } from '../../../features/employee-list/selectors';
import { showPopupAction as showPopup } from '../../../features/navigation/actions';
import { AppState } from '../../../store/types';
import { Employee } from '../../../store/employee-list/types';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    employeeList: Employee[];
  }
>({
  employeeList: getEmployeeListInfo,
});

const mapDispatchToProps = {
  fetchEmployeeList: fetchEmployeeListAction.request,
  showPopup,
};

export const EmployeeListFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListFormComponent);
