import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import { Payment as PaymentIcon } from '@material-ui/icons';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { TitleItem } from '../../../navigation/menu-items/index';
import { TitleSettings } from './settings';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  classes: any;
  authenticated: boolean;
  handleToggle: () => void;
  titleItems: TitleItem[];
  showPopup: () => void;
}

function TitleComponent(props: Props) {
  const { classes, authenticated, handleToggle, titleItems, showPopup, intl } = props;
  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6">{intl.formatMessage({ id: messages.application })}</Typography>
          }
          className={classnames(classes.baseHeader)}
        />
      </ListItem>
      <TitleSettings
        authenticated={authenticated}
        titleItems={titleItems}
        handleToggle={handleToggle}
        showPopup={showPopup}
      />
    </>
  );
}

export const Title = React.memo(injectIntl(withStyles(styles)(TitleComponent)));
