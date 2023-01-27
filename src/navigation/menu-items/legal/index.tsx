import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any;
}

function LegalComponent(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.legal}>
      <span>
        {'\u00A9'}
        {new Date().getFullYear()}
        <br />
      </span>
      <span>All Rights Reserved.</span>
    </div>
  );
}

export const Legal = React.memo(withStyles(styles)(LegalComponent));
