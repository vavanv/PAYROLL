import * as React from 'react';
import {
  DialogTitle as MuiDialogTitle,
  Typography,
  IconButton,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import classnames from 'classnames';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  onClose: () => void;
  title: React.ReactNode;
  showBorder: boolean;
}

const DialogTitleComponent = (props: Props) => {
  const { classes, onClose, title, showBorder } = props;

  const dialogClasses = classnames({
    [classes.dialogTitle]: true,
    [classes.dialogActionBorderBottom]: showBorder,
  });
  return (
    <MuiDialogTitle disableTypography className={dialogClasses}>
      <Typography variant="h6">{title}</Typography>
      {onClose ? (
        <IconButton
          color="primary"
          aria-label="Close"
          className={classes.dialogCloseButton}
          onClick={onClose}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

DialogTitleComponent.defaultProps = {
  showBorder: false,
  onClose: () => {},
};

export const DialogTitle = React.memo(withStyles(styles)(DialogTitleComponent));
