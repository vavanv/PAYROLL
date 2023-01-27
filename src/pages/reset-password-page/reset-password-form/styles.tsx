import { createStyles, Theme } from '@material-ui/core';

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
      paddingTop: spacing(1) / 2,
      paddingBottom: spacing(1) / 2,
    },
    itemText: {
      fontSize: 12,
      fontWeight: 500,
      '&$textDense': {
        fontSize: 12,
        fontWeight: 500,
      },
    },
    textDense: {},
  });
