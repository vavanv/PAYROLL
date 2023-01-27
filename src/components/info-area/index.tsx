import * as React from 'react';
import classNames from 'classnames';
import { Icon, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any;
  icon: string;
  title: string;
  description: string;
  iconColor: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose' | 'gray';
  vertical?: boolean;
}

export const InfoAreaComponent = ({
  classes,
  icon,
  title,
  description,
  iconColor = 'gray',
  vertical,
}: Props) => {
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <Icon className={icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export const InfoArea = React.memo(withStyles(styles)(InfoAreaComponent));
