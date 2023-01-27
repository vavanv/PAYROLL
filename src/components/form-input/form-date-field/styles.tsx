import { createStyles, Theme } from '@material-ui/core';
import { defaultLabelFont } from '../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    labelRoot: {
      ...defaultLabelFont,
    },
    marginTop: {
      marginTop: '16px',
    },
    margin: {
      margin: spacing(1),
    },
    input: {
      '&,&::placeholder': {
        fontSize: '14px',
      },
    },
  });
