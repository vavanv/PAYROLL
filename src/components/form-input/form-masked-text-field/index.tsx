import * as React from 'react';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';
import { TextField, FormControl, withStyles, WithStyles } from '@material-ui/core';
import { MASK } from './constants';

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
  autoFocus: boolean;
  placeholder: string;
}

function upperCasePipe(conformedValue: string) {
  return conformedValue.toUpperCase();
}

const TextMaskInputCustom = (props: any) => {
  const { inputRef, ...rest } = props;
  const mask = () => {
    if (props.type === 'sin') {
      return MASK.sin;
    }
    if (props.type === 'postalCode') {
      return MASK.postalCode;
    }
    return [];
  };
  return (
    <MaskedInput
      {...rest}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholder={props.placeholder}
      placeholderChar={'\u2000'}
      showMask={false}
      pipe={upperCasePipe}
      keepCharPositions={true}
    />
  );
};

export const FormMaskedTextFieldComponent = ({
  id,
  classes,
  label,
  type,
  error,
  value,
  onChange,
  InputProps,
  inputProps,
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
        id={id}
        label={label}
        className={classes.margin}
        value={value}
        type={type}
        error={!!error}
        helperText={error}
        autoFocus={autoFocus}
        onChange={onChange}
        InputProps={{
          inputComponent: TextMaskInputCustom,
          classes: {
            input: inputClasses,
            root: marginTop,
          },
          autoComplete: 'off',
          ...InputProps,
        }}
        InputLabelProps={{
          className: classes.labelRoot,
        }}
        {...props}
      />
    </FormControl>
  );
};

export const FormMaskedTextField = React.memo(withStyles(styles)(FormMaskedTextFieldComponent));
