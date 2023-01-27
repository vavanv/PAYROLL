import * as React from 'react';
import { EmployeeListFormContainer } from '../../pages/employee-list-page/employee-list-form/container';

import { MainContainer } from '../../pages/main-container';

function EmployeeListPageComponent() {
  return (
    <MainContainer>
      <EmployeeListFormContainer />
    </MainContainer>
  );
}

export const EmployeeListPage = React.memo(EmployeeListPageComponent);
