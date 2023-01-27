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

import { messages } from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  open: boolean;
  handleOK: () => void;
  handleCancel: () => void;
  message: string;
  title: string;
}

export const ModalConfirmationComponent = ({
  open,
  classes,
  handleOK,
  handleCancel,
  message,
  title,
  intl,
}: Props) => {
  return (
    <Dialog open={open} keepMounted onClose={handleCancel} fullWidth={true}>
      <DialogTitle title={title} onClose={handleCancel} />
      <DialogContent className={classes.message}>
        <Typography variant="body1" align="left">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          {intl.formatMessage({ id: messages.cancel })}
        </Button>
        <Button color="primary" onClick={handleOK}>
          {intl.formatMessage({ id: messages.ok })}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const ModalConfirmation = React.memo(
  injectIntl(withStyles(styles)(ModalConfirmationComponent)),
);
