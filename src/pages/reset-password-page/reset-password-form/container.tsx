import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ResetPasswordFormComponent } from '../../../pages/reset-password-page/reset-password-form/component';
import { loginAction } from '../../../features/user/actions';
import { loginPageError } from '../../../features/ui/selectors';
import { AppState } from '../../../store/types';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    loginError: string | undefined | null;
  }
>({
  loginError: loginPageError,
});

const mapDispatchToProps = {
  loginAction: loginAction.request,
};

export const ResetPasswordFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordFormComponent);
