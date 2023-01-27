import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from '../../pages/landing-page';
import { LoginPage } from '../../pages/login-page';
import { ResetPasswordPage } from '../../pages/reset-password-page';
import { ForgotPasswordPage } from '../../pages/forgot-password-page';
import { ContactUsPage } from '../../pages/contact-us-page';
import { EmployeeListPage } from '../../pages/employee-list-page';
import {
  ROUTE_ROOT,
  ROUTE_LOGIN,
  ROUTE_CONTACT_US,
  ROUTE_FORGOT_PASSWORD,
  ROUTE_RESET_PASSWORD,
  ROUTE_EMPLOYEE_LIST,
} from '../app/constants';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={ROUTE_ROOT} component={LandingPage} />
      <Route path={ROUTE_LOGIN} component={LoginPage} />
      <Route path={ROUTE_CONTACT_US} component={ContactUsPage} />
      <Route path={ROUTE_FORGOT_PASSWORD} component={ForgotPasswordPage} />
      <Route path={ROUTE_RESET_PASSWORD} component={ResetPasswordPage} />
      <Route path={ROUTE_EMPLOYEE_LIST} component={EmployeeListPage} />
    </Switch>
  </>
);

export default withRouter(Routes);
