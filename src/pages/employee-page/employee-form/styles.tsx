import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    section: {
      padding: '0 20px 0 20px',
      textAlign: 'center',
    },
    form: {
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    },
    margin: {
      margin: spacing(1),
    },
    titleMargin: {
      margin: spacing(2),
    },
    smallMargin: {
      margin: spacing(1) * 0.2,
    },
    buttonsMargin: {
      margin: spacing(1),
      textAlign: 'right',
    },
  });
