import * as React from 'react';
import { withFormik, FastField as Field, Form, FormikProps } from 'formik';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  InputAdornment,
  Typography,
  Divider,
  Button,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Home as HomeIcon, Person as PersonIcon } from '@material-ui/icons';
import { GridContainer, GridItem, FormTextField, ModalAlert } from '../../../components';

import { validationSchema } from './validation';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  loginAction: () => void;
  handleChange: () => void;
  handleBlur: () => void;
  loginError: any;
}

interface FormValues {
  company: string;
  username: string;
}

interface InitialFormValues extends FormValues, Props {}

const ForgotPasswordForm = (props: Props & FormikProps<FormValues>) => {
  const [modalOpen, setModalOpen] = React.useState(true);

  const { values, touched, errors, handleChange, handleBlur, classes, loginError, intl } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={10} sm={6} md={4}>
          <Form className={classes.form}>
            <Typography variant="h6" className={classes.margin} align="left">
              {intl.formatMessage({ id: messages.forgotPassword })}
            </Typography>
            <Divider />
            <Typography variant="body2" className={classes.margin} align="left">
              {intl.formatMessage({ id: messages.resetPasswordDescription })}
            </Typography>
            <Field
              id="company"
              value={values.company}
              label={intl.formatMessage({ id: messages.company })}
              error={touched.company && errors.company}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Field
              id="username"
              value={values.username}
              label={intl.formatMessage({ id: messages.username })}
              error={touched.username && errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="primary"
              type="submit"
              variant="outlined"
              className={classes.margin}
              onClick={() => setModalOpen(true)}
            >
              {intl.formatMessage({ id: messages.ok })}
            </Button>
          </Form>
        </GridItem>
      </GridContainer>
      {loginError !== null && modalOpen && (
        <ModalAlert
          open={true}
          title="Error"
          message={loginError.message}
          handleClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export const ForgotPasswordFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'ForgotPasswordForm',
  mapPropsToValues: props => ({
    company: props.company || '',
    username: props.username || '',
  }),
  handleSubmit: (values: any, { props, setSubmitting }: any) => {
    const { loginAction } = props;
    setSubmitting(false);
    loginAction(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(ForgotPasswordForm);

export const ForgotPasswordFormComponent = injectIntl(
  withStyles(styles)(ForgotPasswordFormWithFormik),
);
