import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loginPageError } from '../../../features/ui/selectors';
import { AppState } from '../../../store/types';
import { ForgotPasswordFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    loginError: string | undefined | null;
  }
>({
  loginError: loginPageError,
});

const mapDispatchToProps = {};

export const ForgotPasswordFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordFormComponent);
