import { createStyles, Theme } from '@material-ui/core';
import { defaultLabelFont } from '../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    margin: {
      margin: spacing(1),
    },
    labelRoot: {
      ...defaultLabelFont,
    },
  });
