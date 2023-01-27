import * as React from 'react';
import classNames from 'classnames';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { FormControl, withStyles, WithStyles } from '@material-ui/core';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@material-ui/icons';
import { DATE_PICKER_DATE_FORMAT } from '../../../utils/common/constants';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  form: any;
  field: any;
  name: string;
  label: string;
  error: boolean;
  value?: Date;
}

export const FormDateFieldComponent = ({
  form,
  field,
  name,
  classes,
  label,
  error,
  value,
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
      <KeyboardDatePicker
        leftArrowIcon={<KeyboardArrowLeftIcon />}
        rightArrowIcon={<KeyboardArrowRightIcon />}
        disableFuture={true}
        className={classes.margin}
        label={label}
        name={name}
        value={value}
        format={DATE_PICKER_DATE_FORMAT.short}
        onChange={date => form.setFieldValue(field.name, date, true)}
        InputProps={{
          classes: {
            input: inputClasses,
            root: marginTop,
          },
        }}
        InputLabelProps={{
          className: classes.labelRoot,
        }}
        {...props}
      />
    </FormControl>
  );
};

export const FormDateField = React.memo(withStyles(styles)(FormDateFieldComponent));
