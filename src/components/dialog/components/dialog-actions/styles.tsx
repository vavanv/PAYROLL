import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    dialogAction: {
      margin: 0,
      padding: spacing(1),
    },
    dialogActionBorderTop: {
      borderTop: `1px solid ${palette.divider}`,
    },
  });
};
