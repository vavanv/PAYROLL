import { combineReducers } from 'redux';

import {
  initialState as initialUINavBarState,
  uiNavBarReducer,
} from '../../store/ui/nav-bar/reducer';
import {
  initialState as initialUILoginPageState,
  uiLoginPageReducer,
} from '../../store/ui/login-page/reducer';
import {
  initialState as initialUILandingPageState,
  uiLandingPageReducer,
} from '../../store/ui/landing-page/reducer';
import {
  initialState as initialUIShowPopupState,
  uiShowPopupReducer,
} from '../../store/ui/show-popup/reducer';
import {
  initialState as initialUIShowInfoState,
  uiShowInfoReducer,
} from '../../store/ui/show-info/reducer';
import { UIState } from '../../store/ui/types';

export const initialUIState: UIState = {
  navBar: initialUINavBarState,
  loginPage: initialUILoginPageState,
  landingPage: initialUILandingPageState,
  showPopup: initialUIShowPopupState,
  showInfo: initialUIShowInfoState,
};

export const uiReducer = combineReducers({
  navBar: uiNavBarReducer,
  loginPage: uiLoginPageReducer,
  landingPage: uiLandingPageReducer,
  showPopup: uiShowPopupReducer,
  showInfo: uiShowInfoReducer,
});
