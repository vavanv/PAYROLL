import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    dialogTitle: {
      margin: 0,
      padding: spacing(2),
    },
    dialogActionBorderBottom: {
      borderBottom: `1px solid ${palette.divider}`,
    },
    dialogCloseButton: {
      position: 'absolute',
      right: spacing(2),
      top: spacing(2),
      color: palette.grey[500],
    },
  });
};
