import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  isNavBarLoading,
  isShowPopup,
  popupType,
  isShowInfo,
  getShowInfoMessage,
} from '../features/ui/selectors';
import {
  getUserInfo,
  isUserAuthenticated,
  isAdministrator,
  getUserCultureCode,
} from '../features/user/selectors';
import {
  showPopupAction as showPopup,
  showInfoAction as showInfo,
} from '../features/navigation/actions';
import { AppState } from '../store/types';
import { UserState } from '../store/user/types';
import NavBarComponent from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    isNavBarLoading: boolean;
    userInfo: UserState;
    authenticated: boolean;
    isAdministrator: boolean;
    isShowPopup: boolean;
    popupType: string;
    isShowInfo: boolean;
    infoMessage: string;
    userCultureCode: string;
  }
>({
  isNavBarLoading: isNavBarLoading,
  userInfo: getUserInfo,
  authenticated: isUserAuthenticated,
  isAdministrator: isAdministrator,
  isShowPopup: isShowPopup,
  popupType: popupType,
  isShowInfo: isShowInfo,
  infoMessage: getShowInfoMessage,
  userCultureCode: getUserCultureCode,
});

const mapDispatchToProps = {
  showPopup,
  showInfo,
};

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
