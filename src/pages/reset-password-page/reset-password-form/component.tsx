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
  loginAction: (params: any) => void;
  handleChange: () => void;
  handleBlur: () => void;
  loginError: any;
}

interface FormValues {
  company: string;
  username: string;
  confirmationCode: string;
  password: string;
  confirmPassword: string;
}

interface InitialFormValues extends FormValues, Props {}

const ResetPasswordForm = (props: Props & FormikProps<FormValues>) => {
  const [modalOpen, setModalOpen] = React.useState(true);

  const { values, touched, errors, handleChange, handleBlur, classes, loginError, intl } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={10} sm={6} md={4}>
          <Form className={classes.form}>
            <Typography variant="h6" className={classes.margin} align="left">
              {intl.formatMessage({ id: messages.resetPassword })}
            </Typography>
            <Divider />
            <br />
            <Field
              id="company"
              value={values.company}
              label={intl.formatMessage({ id: messages.company })}
              autoFocus={false}
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
            <Field
              id="confirmation_code"
              value={values.confirmationCode}
              label={intl.formatMessage({ id: messages.confirmationCode })}
              error={touched.confirmationCode && errors.confirmationCode}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="text"
            />
            <Field
              id="password"
              value={values.password}
              label={intl.formatMessage({ id: messages.password })}
              error={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="password"
            />
            <Field
              id="confirm_password"
              value={values.confirmPassword}
              label={intl.formatMessage({ id: messages.confirmPassword })}
              error={touched.confirmPassword && errors.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="password"
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

export const ResetPasswordFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'ResetPasswordForm',
  mapPropsToValues: props => ({
    company: props.company || '',
    username: props.username || '',
    password: props.password || '',
    confirmPassword: props.confirmPassword || '',
    confirmationCode: props.confirmationCode || '',
  }),
  handleSubmit: (values: any, { props, setSubmitting }: any) => {
    const { loginAction } = props;
    setSubmitting(false);
    loginAction(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(ResetPasswordForm);

export const ResetPasswordFormComponent = injectIntl(
  withStyles(styles)(ResetPasswordFormWithFormik),
);
