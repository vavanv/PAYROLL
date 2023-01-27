import * as React from 'react';
import { withFormik, FastField as Field, Form, FormikProps } from 'formik';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Typography, Divider, Button, withStyles, WithStyles } from '@material-ui/core';
import { GridContainer, GridItem, FormTextField, FormCheckboxField } from '../../../../components';

import { validationSchema } from './validation';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  loading: boolean;
  submitWorkSectionRequestAction: (values: any) => void;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

interface InitialFormValues extends Props {
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

const ContactUsInfoForm = (props: Props & FormikProps<FormValues>) => {
  const { values, touched, errors, handleChange, handleBlur, classes, loading, intl } = props;
  return (
    <div className={classes.section}>
      <Form className={classes.form}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Typography variant="h6">{'Send us a message'}</Typography>
            <Typography variant="body2">
              {
                'You can contact us with anything related to our Products. We will get in touch with you as soon as possible.'
              }
            </Typography>
            <br />
            <Divider />
            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Field
                  id="name"
                  value={values.name}
                  label={intl.formatMessage({ id: messages.name })}
                  error={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={FormTextField}
                  type="text"
                />
                <Field
                  id="email"
                  value={values.email}
                  label={intl.formatMessage({ id: messages.email })}
                  error={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={FormTextField}
                  type="text"
                />
                <Field
                  id="message"
                  value={values.message}
                  label={intl.formatMessage({ id: messages.message })}
                  error={touched.message && errors.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={FormTextField}
                  type="text"
                  multiline={true}
                  rows={5}
                />
                <Field
                  id="send_copy"
                  value={values.sendCopy}
                  label={intl.formatMessage({ id: messages.sendCopy })}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={FormCheckboxField}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <br />
                <Button color="primary" type="submit" variant="outlined" disabled={loading}>
                  {intl.formatMessage({ id: messages.send })}
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Form>
    </div>
  );
};

export const ContactUsInfoFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'ContactUsInfoForm',
  mapPropsToValues: props => ({
    name: props.name || '',
    email: props.email || '',
    message: props.message || '',
    sendCopy: props.sendCopy || true,
  }),
  handleSubmit: (values: any, { props, setSubmitting }: any) => {
    const { submitWorkSectionRequestAction } = props;
    setSubmitting(false);
    submitWorkSectionRequestAction(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(ContactUsInfoForm);

export const ContactUsInfoComponent = injectIntl(withStyles(styles)(ContactUsInfoFormWithFormik));
