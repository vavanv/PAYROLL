import * as React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

const GridContainerComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid}`}>
      {children}
    </Grid>
  );
};

export const GridContainer = withStyles(styles)(GridContainerComponent);
