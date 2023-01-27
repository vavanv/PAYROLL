import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { TextField, FormControl, MenuItem, withStyles, WithStyles } from '@material-ui/core';
import classNames from 'classnames';

import { messages } from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  id: string;
  label: string;
  error: boolean;
  value: any;
  InputProps: any;
  inputProps: any;
  input: any;
  items: [];
}

export const FormDropDownFieldComponent = ({
  id,
  classes,
  label,
  error,
  value,
  InputProps,
  inputProps,
  items,
  intl,
}: Props) => {
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.inputSelect]: value === 0,
  });

  const inputSelect = classNames({
    [classes.input]: true,
    [classes.inputSelect]: true,
  });

  const marginTop = classNames({
    [classes.marginTop]: label === undefined,
  });

  const selectSmthItem = intl.formatMessage(
    { id: messages.selectSmth },
    {
      smth: intl.formatMessage({ id: label }),
    },
  );

  let selectElements = [];
  selectElements[0] = (
    <MenuItem key={0} value={0} className={inputSelect}>
      {selectSmthItem}
    </MenuItem>
  );
  selectElements = selectElements.concat(
    items.map((item: any) => {
      return (
        <MenuItem key={item.id} value={item.id} className={classes.input}>
          {item.description}
        </MenuItem>
      );
    }),
  );

  return (
    <FormControl fullWidth={true}>
      <TextField
        // variant="outlined"
        id={id}
        label={label}
        select={true}
        className={classes.margin}
        value={value}
        error={!!error}
        helperText={error}
        InputProps={{
          classes: {
            input: inputClasses,
            root: marginTop,
          },
          ...InputProps,
        }}
        // eslint-disable-next-line
        inputProps={{
          ...inputProps,
        }}
        InputLabelProps={{
          className: classes.labelRoot,
        }}
      >
        {selectElements}
      </TextField>
    </FormControl>
  );
};

export const FormDropDownField = React.memo(
  injectIntl(withStyles(styles)(FormDropDownFieldComponent)),
);
