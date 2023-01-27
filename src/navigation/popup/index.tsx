import * as React from 'react';
import { POPUP_TYPES } from '../../store/ui/show-popup/constants';
import { EmployeeForm } from '../../pages/employee-page/employee-form';
import { CompanyForm } from '../../pages/company-page/company-form';

export function getShowPopupComponent(type: string, props: any) {
  switch (type) {
    case POPUP_TYPES.employee:
      return <EmployeeForm {...props} />;
    case POPUP_TYPES.company:
      return <CompanyForm {...props} />;
    default:
      return null;
  }
}
