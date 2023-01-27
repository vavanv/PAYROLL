import * as React from 'react';
import { FormControlLabel, Checkbox, FormControl, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  label: string;
  checked: boolean;
  onChange: (values: any) => () => void;
}

export const FormCheckboxFieldComponent = ({ classes, label, checked, onChange }: Props) => {
  return (
    <FormControl fullWidth={true}>
      <FormControlLabel
        classes={{
          label: classes.labelRoot,
        }}
        control={
          <Checkbox
            className={classes.margin}
            checked={checked}
            color="primary"
            onChange={onChange}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export const FormCheckboxField = React.memo(withStyles(styles)(FormCheckboxFieldComponent));
