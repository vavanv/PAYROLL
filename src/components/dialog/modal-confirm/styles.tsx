import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    message: {
      margin: 0,
      padding: spacing(2),
    },
  });
};
