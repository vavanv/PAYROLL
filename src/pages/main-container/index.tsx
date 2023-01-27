import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { NavBar } from '../../navigation';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any;
  children?: React.ReactNode;
}

const MainContainerComponent = (props: Props) => {
  return (
    <>
      <NavBar headerColor={'primary'} />
      <div className={props.classes.container}>{props.children}</div>
    </>
  );
};

export const MainContainer = React.memo(withStyles(styles)(MainContainerComponent));
