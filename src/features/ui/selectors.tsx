import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { UIState } from '../../store/ui/types';
import { UILoginPageState } from '../../store/ui/login-page/types';
import { UINavBarState } from '../../store/ui/nav-bar/types';
import { UILandingPageState } from '../../store/ui/landing-page/types';
import { UIShowPopupState } from '../../store/ui/show-popup/types';
import { UIShowInfoState } from '../../store/ui/show-info/types';

export const getUISelector = (state: AppState): UIState => state.ui;

// Selectors
export const navBarUISelector = createSelector(
  getUISelector,
  (ui: UIState): UINavBarState => ui.navBar,
);

export const landingPageUISelector = createSelector(
  getUISelector,
  (ui: UIState): UILandingPageState => ui.landingPage,
);

export const loginPageUISelector = createSelector(
  getUISelector,
  (ui: UIState): UILoginPageState => ui.loginPage,
);

// Show Popup
export const showPopupSelector = createSelector(
  getUISelector,
  (ui: UIState): UIShowPopupState => ui.showPopup,
);

export const isShowPopup = createSelector(
  showPopupSelector,
  (showPopup: UIShowPopupState): boolean => showPopup.isOpen,
);

export const popupType = createSelector(
  showPopupSelector,
  (showPopup: UIShowPopupState): string => showPopup.type,
);

export const getShowPopupId = createSelector(
  showPopupSelector,
  (showPopup: UIShowPopupState): number => showPopup.id,
);

// Show Info
export const showInfoSelector = createSelector(
  getUISelector,
  (ui: UIState): UIShowInfoState => ui.showInfo,
);

export const isShowInfo = createSelector(
  showInfoSelector,
  (showInfo: UIShowInfoState): boolean => showInfo.isOpen,
);

export const getShowInfoMessage = createSelector(
  showInfoSelector,
  (showInfo: UIShowInfoState): string => showInfo.message,
);

// Loading
export const isNavBarLoading = createSelector(
  navBarUISelector,
  (navBar: UINavBarState): boolean => navBar.loading,
);

export const loginPageError = createSelector(
  loginPageUISelector,
  (loginPage: UILoginPageState): string | undefined | null => loginPage.error,
);

export const isLandingPageLoading = createSelector(
  landingPageUISelector,
  (landingPage: UILandingPageState): boolean => landingPage.loading,
);
