import { UILoginPageState } from '../../store/ui/login-page/types';
import { UINavBarState } from '../../store/ui/nav-bar/types';
import { UILandingPageState } from '../../store/ui/landing-page/types';
import { UIShowPopupState } from '../../store/ui/show-popup/types';
import { UIShowInfoState } from '../../store/ui/show-info/types';

export interface UIState {
  loginPage: UILoginPageState;
  navBar: UINavBarState;
  landingPage: UILandingPageState;
  showPopup: UIShowPopupState;
  showInfo: UIShowInfoState;
}
