import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    section: {
      padding: '100px 0',
    },
    headerMargin: {
      margin: spacing(1),
    },
    titleMargin: {
      margin: spacing(2),
    },
  });
