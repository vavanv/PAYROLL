import * as React from 'react';
import classNames from 'classnames';

import { TextField, FormControl, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  id: string;
  label: string;
  type: string;
  error: boolean;
  value?: (string | number | boolean)[] | string | number | boolean;
  onChange: () => void;
  InputProps: any;
  inputProps: any;
  multiline?: boolean;
  rows?: number;
  autoFocus: boolean;
}

export const FormTextFieldComponent = ({
  id,
  classes,
  label,
  type,
  error,
  value,
  onChange,
  InputProps,
  inputProps,
  multiline,
  rows,
  autoFocus,
  ...props
}: Props) => {
  const inputClasses = classNames({
    [classes.input]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: label === undefined,
  });
  return (
    <FormControl fullWidth={true}>
      <TextField
        // variant="outlined"
        id={id}
        label={label}
        className={classes.margin}
        value={value}
        type={type}
        error={!!error}
        helperText={error}
        autoFocus={autoFocus}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        InputProps={{
          classes: {
            input: inputClasses,
            root: marginTop,
          },
          autoComplete: 'off',
          ...InputProps,
        }}
        // eslint-disable-next-line
        inputProps={{
          ...inputProps,
        }}
        InputLabelProps={{
          className: classes.labelRoot,
        }}
        {...props}
      />
    </FormControl>
  );
};

export const FormTextField = React.memo(withStyles(styles)(FormTextFieldComponent));
