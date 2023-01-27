import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  MailOutline as ContactMailIcon,
  ExitToApp as ExitToAppIcon,
  LockOpen as LockOpenIcon,
  Restore as RestoreIcon,
  Assignment as AssignmentIcon,
  People as PeopleIcon,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import {
  ROUTE_ROOT,
  ROUTE_LOGIN,
  ROUTE_RESET_PASSWORD,
  ROUTE_CONTACT_US,
  ROUTE_EMPLOYEE_LIST,
} from '../../app/app/constants';

import { Legal } from './legal';
import { Title } from './title';

import messages from './messages';
import { styles } from './styles';

export interface TitleItem {
  id: string;
  icon: any;
  visible: boolean;
  route?: string;
}

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  classes: any;
  authenticated: boolean;
  isAdministrator: boolean;
  handleToggle: () => void;
  showPopup: () => void;
}

function NavBarMainMenuItemsComponent(props: Props) {
  const { classes, authenticated, isAdministrator, handleToggle, showPopup, intl } = props;

  const titleItems: TitleItem[] = [
    {
      id: messages.company,
      icon: <AssignmentIcon />,
      visible: authenticated && isAdministrator,
    },
    {
      id: messages.employees,
      icon: <PeopleIcon />,
      visible: authenticated && isAdministrator,
      route: ROUTE_EMPLOYEE_LIST,
    },
  ];

  const items = [
    {
      id: messages.mainItem,
      visible: true,
      subitems: [
        {
          id: messages.home,
          icon: <HomeIcon />,
          visible: true,
          route: ROUTE_ROOT,
        },
        {
          id: messages.contactUs,
          icon: <ContactMailIcon />,
          visible: true,
          route: ROUTE_CONTACT_US,
        },
      ],
    },
    {
      id: messages.user,
      visible: true,
      subitems: [
        {
          id: messages.sightOut,
          icon: <LockOpenIcon />,
          visible: authenticated,
          route: ROUTE_LOGIN,
        },
        {
          id: messages.resetPassword,
          icon: <RestoreIcon />,
          visible: !authenticated,
          route: ROUTE_RESET_PASSWORD,
        },
        {
          id: messages.login,
          icon: <ExitToAppIcon />,
          visible: !authenticated,
          route: ROUTE_LOGIN,
        },
      ],
    },
  ];

  return (
    <div className={classes.rootDiv}>
      <List className={classes.list}>
        <Title
          authenticated={authenticated}
          titleItems={titleItems}
          handleToggle={handleToggle}
          showPopup={showPopup}
        />
        {items.map(({ id, visible, subitems }) => {
          return visible ? (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader} key={id}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderText,
                  }}
                >
                  {intl.formatMessage({ id: id })}
                </ListItemText>
              </ListItem>
              {subitems.map(({ id: subitemId, icon, visible: visibleSubItem, route }) => {
                return visibleSubItem ? (
                  <Link to={route} key={subitemId}>
                    <ListItem
                      button
                      onClick={handleToggle}
                      className={classes.item}
                      key={subitemId}
                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <ListItemText
                        primary={intl.formatMessage({ id: subitemId })}
                        classes={{ primary: classes.itemText }}
                      />
                    </ListItem>
                  </Link>
                ) : null;
              })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ) : null;
        })}
      </List>
      <Legal />
    </div>
  );
}

export const NavBarMainMenuItems = React.memo(
  injectIntl(withStyles(styles)(NavBarMainMenuItemsComponent)),
);
