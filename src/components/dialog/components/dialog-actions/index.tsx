import * as React from 'react';
import { DialogActions as MuiDialogActions, withStyles, WithStyles } from '@material-ui/core';
import classnames from 'classnames';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
  showBorder: boolean;
}

export const DialogActionsComponent = ({ children, classes, showBorder }: Props) => {
  const dialogClasses = classnames({
    [classes.dialogAction]: true,
    [classes.dialogActionBorderTop]: showBorder,
  });
  return <MuiDialogActions className={dialogClasses}>{children}</MuiDialogActions>;
};

DialogActionsComponent.defaultProps = {
  showBorder: false,
};

export const DialogActions = React.memo(withStyles(styles)(DialogActionsComponent));
