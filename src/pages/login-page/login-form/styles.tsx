import { createStyles, Theme } from '@material-ui/core';
import { defaultLabelFont } from '../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    section: {
      padding: '100px 0',
      textAlign: 'center',
    },
    form: {
      margin: '0',
    },
    margin: {
      margin: spacing(1),
    },
    titleMargin: {
      margin: spacing(2),
    },
    list: {
      padding: 0,
      '& svg': {
        fontSize: 20,
      },
    },
    item: {
      '&:hover': {
        background: 'rgba(255,255,255,.08)',
      },
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
    },
    itemText: {
      ...defaultLabelFont,
      fontWeight: 600,
      fontSize: '13px',
    },
    textDense: {},
  });
