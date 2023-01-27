import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserCulture, selectMessages } from '../features/intl/selectors';
import { Intl } from '../intl/component';
import { AppState } from '../store/types';
import { UserCulture } from '../store/user/types';

export const mapStateToProps = createStructuredSelector<
  AppState,
  {
    culture: UserCulture;
    messages: any;
  }
>({
  culture: selectUserCulture,
  messages: selectMessages,
});

export const IntlContainer = connect(mapStateToProps)(Intl);
