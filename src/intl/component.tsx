import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { getLanguage } from '../locales';
import { UserCulture } from '../store/user/types';

interface Props {
  culture: UserCulture;
  children?: React.ReactNode;
  messages: any;
}

const IntlComponent = ({ culture, children, messages }: Props) => {
  const locale = getLanguage();
  return (
    <IntlProvider locale={locale} messages={messages} key={culture.cultureCode}>
      {children}
    </IntlProvider>
  );
};

export const Intl = React.memo(IntlComponent);
