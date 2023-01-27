import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loginAction } from '../../../features/user/actions';
import { loginPageError } from '../../../features/ui/selectors';
import { AppState } from '../../../store/types';
import { LoginFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    loginError: string | undefined | null;
  }
>({
  loginError: loginPageError,
});

const mapDispatchToProps = {
  login: loginAction.request,
};

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
