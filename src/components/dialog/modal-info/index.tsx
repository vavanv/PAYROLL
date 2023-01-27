import * as React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  CircularProgress,
  Grid,
  withStyles,
  WithStyles,
} from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  open: boolean;
  message: string;
}

export const ModalInfoComponent = ({ open, classes, message }: Props) => {
  return (
    <Dialog open={open} keepMounted>
      <DialogContent className={classes.message}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography variant="body1" align="left">
              {message}
            </Typography>
          </Grid>
          <Grid item>
            <CircularProgress size={24} color="inherit" />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export const ModalInfo = React.memo(withStyles(styles)(ModalInfoComponent));
