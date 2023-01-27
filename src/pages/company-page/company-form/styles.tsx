import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    section: {
      padding: '100px 0',
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
  });
