import * as React from 'react';
import { Add as AddIcon } from '@material-ui/icons';
import { IconButton, Tooltip, withStyles, WithStyles } from '@material-ui/core';
import { Payload } from '../../../../store/types';
import { POPUP_TYPES } from '../../../../store/ui/show-popup/constants';

import { styles } from '../styles';

interface Props extends WithStyles<typeof styles> {
  tooltipTitle: string;
  classes: any;
  showPopup: ({ id, type }: Payload) => void;
}

function CustomToolbarComponent(props: Props) {
  const { showPopup, tooltipTitle } = props;
  return (
    <>
      <Tooltip title={tooltipTitle}>
        <IconButton
          onClick={() => {
            showPopup({ id: 0, type: POPUP_TYPES.employee });
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export const CustomToolbar = React.memo(withStyles(styles)(CustomToolbarComponent));
