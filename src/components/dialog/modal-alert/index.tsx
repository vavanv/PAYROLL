import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { DialogActions } from '../components/dialog-actions';
import { DialogTitle } from '../components/dialog-title';

import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  title: React.ReactNode;
}

export const ModalAlertComponent = ({
  open,
  classes,
  handleClose,
  message,
  title,
  intl,
}: Props) => {
  return (
    <Dialog open={open} keepMounted fullWidth={true}>
      <DialogTitle title={title} onClose={handleClose} />
      <DialogContent className={classes.message}>
        <Typography variant="body1" align="left">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          {intl.formatMessage({ id: messages.ok })}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const ModalAlert = React.memo(injectIntl(withStyles(styles)(ModalAlertComponent)));
