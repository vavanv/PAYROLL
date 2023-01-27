import * as React from 'react';
import { Drawer, withStyles, WithStyles } from '@material-ui/core';
import classnames from 'classnames';

import { POPUP_TYPES } from '../store/ui/show-popup/constants';
import { ModalInfo } from '../components';

import { Payload } from '../store/types';

import { UserState } from '../store/user/types';

import { getShowPopupComponent } from './popup';
import { NavBarMainMenuItems } from './menu-items';
import { Header } from './header';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  userInfo: UserState;
  isNavBarLoading: boolean;
  authenticated: boolean;
  isAdministrator: boolean;
  headerColor: string;
  isShowPopup: boolean;
  popupType: string;
  showPopup: ({ id, type }: Payload) => void;
  isShowInfo: boolean;
  infoMessage: string;
  userCultureCode: string;
}

const NavBarComponent = (props: Props) => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  function showPopupHandler() {
    setSideMenuOpen(!sideMenuOpen);
    props.showPopup({ id: null, type: POPUP_TYPES.company });
  }

  const {
    classes,
    // userInfo,
    authenticated,
    isAdministrator,
    isNavBarLoading,
    headerColor,
    isShowPopup,
    popupType,
    isShowInfo,
    infoMessage,
    userCultureCode,
  } = props;

  return (
    <>
      <Header
        color={headerColor}
        handleToggle={() => setSideMenuOpen(!sideMenuOpen)}
        loading={isNavBarLoading}
        userCultureCode={userCultureCode}
      />
      <Drawer
        open={sideMenuOpen}
        classes={{ paper: classnames('navigator', classes.drawer) }}
        onClose={() => setSideMenuOpen(!sideMenuOpen)}
      >
        <NavBarMainMenuItems
          authenticated={authenticated}
          isAdministrator={isAdministrator}
          handleToggle={() => setSideMenuOpen(!sideMenuOpen)}
          showPopup={showPopupHandler}
        />
      </Drawer>
      <ModalInfo open={isShowInfo} message={infoMessage} />
      {isShowPopup && getShowPopupComponent(popupType, null)}
    </>
  );
};

export default React.memo(withStyles(styles)(NavBarComponent));
