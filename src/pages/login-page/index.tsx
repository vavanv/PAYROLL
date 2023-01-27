import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LoginForm } from '../../pages/login-page/login-form';
import { MainContainer } from '../../pages/main-container';
import { logoutAction } from '../../features/user/actions';

function LoginPageComponent(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(logoutAction());
  });

  return (
    <MainContainer>
      <LoginForm {...props} />
    </MainContainer>
  );
}

export const LoginPage = React.memo(LoginPageComponent);
