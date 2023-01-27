import * as React from 'react';

import { ForgotPasswordForm } from '../../pages/forgot-password-page/forgot-password-form';
import { MainContainer } from '../../pages/main-container';

function ForgotPasswordPageComponent(props: any) {
  return (
    <MainContainer>
      <ForgotPasswordForm {...props} />
    </MainContainer>
  );
}

export const ForgotPasswordPage = React.memo(ForgotPasswordPageComponent);
