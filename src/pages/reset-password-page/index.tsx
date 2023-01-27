import * as React from 'react';

import { ResetPasswordForm } from '../../pages/reset-password-page/reset-password-form';
import { MainContainer } from '../../pages/main-container';

function ResetPasswordPageComponent(props: any) {
  return (
    <MainContainer>
      <ResetPasswordForm {...props} />
    </MainContainer>
  );
}

export const ResetPasswordPage = React.memo(ResetPasswordPageComponent);
