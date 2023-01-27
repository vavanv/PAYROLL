import * as React from 'react';
import { withFormik, FastField as Field, Form, FormikProps } from 'formik';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  InputAdornment,
  Typography,
  Divider,
  ListItemText,
  List,
  ListItem,
  Button,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Lock as LockIcon, Home as HomeIcon, Person as PersonIcon } from '@material-ui/icons';
import { GridContainer, GridItem, FormTextField, ModalAlert } from '../../../components';
import { ROUTE_FORGOT_PASSWORD } from '../../../app/app/constants';

import { validationSchema } from './validation';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  login: (params: any) => void;
  loginError: any;
}

export interface FormValues {
  company: string;
  username: string;
  password: string;
}

interface InitialFormValues extends FormValues, Props {}

function LoginForm(props: Props & FormikProps<FormValues>) {
  const [modalOpen, setModalOpen] = React.useState(true);

  const { values, touched, errors, handleChange, handleBlur, classes, loginError, intl } = props;
  return (
    <div className={classes.section}>
      <Form className={classes.form}>
        <GridContainer justify="center">
          <GridItem xs={10} sm={6} md={4}>
            <Typography variant="h6" className={classes.titleMargin} align="left">
              {intl.formatMessage({ id: messages.login })}
            </Typography>
            <Divider />
            <Field
              id="company"
              value={values.company}
              label={intl.formatMessage({ id: messages.company })}
              autoFocus={true}
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
              id="password"
              value={values.password}
              label={intl.formatMessage({ id: messages.password })}
              error={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormTextField}
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
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
              {intl.formatMessage({ id: messages.login })}
            </Button>
            <List className={classes.list}>
              <Link to={ROUTE_FORGOT_PASSWORD}>
                <ListItem className={classes.item}>
                  <ListItemText
                    primary={intl.formatMessage({ id: messages.forgotPassword })}
                    classes={{ primary: classes.itemText }}
                  />
                </ListItem>
              </Link>
            </List>
          </GridItem>
        </GridContainer>
        {loginError !== null && modalOpen && (
          <ModalAlert
            open={true}
            title={intl.formatMessage({ id: messages.loginErrorTitle })}
            message={loginError.message}
            handleClose={() => setModalOpen(false)}
          />
        )}
      </Form>
    </div>
  );
}

export const LoginFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'LoginForm',
  mapPropsToValues: props => ({
    company: props.company || '',
    username: props.username || '',
    password: props.password || '',
  }),
  handleSubmit: (values: FormValues, { props, setSubmitting }: any) => {
    const { login } = props;
    setSubmitting(false);
    login(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(LoginForm);

export const LoginFormComponent = injectIntl(withStyles(styles)(LoginFormWithFormik));
