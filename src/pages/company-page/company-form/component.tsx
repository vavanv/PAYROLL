import * as React from 'react';
import moment from 'moment';
import { withFormik, FastField as Field, Form, FormikProps } from 'formik';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  Typography,
  Divider,
  Button,
  Dialog,
  DialogContent,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import {
  GridContainer,
  GridItem,
  FormTextField,
  FormDropDownField,
  FormDateField,
  FormMaskedTextField,
  DialogTitle,
  DialogActions,
} from '../../../components';
import { CompanyState } from '../../../store/company/types';
import { MasterListItem } from '../../../store/master-list/types';
import { FORM_DATE_FORMAT } from '../../../utils/common/constants';

import { validationSchema } from './validation';
import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  company: CompanyState;
  provinces: MasterListItem[];
  businessTypes: MasterListItem[];
  isShowPopup: boolean;
  updateCompany: (values: any) => void;
  fetchCompany: (params: any) => void;
  hidePopup: () => void;
}

type FormValues = CompanyState;

interface InitialFormValues extends CompanyState, Props {}

const CompanyForm = (props: Props & FormikProps<FormValues>) => {
  const {
    classes,
    fetchCompany,
    provinces,
    businessTypes,
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    isShowPopup,
    hidePopup,
    intl,
  } = props;

  React.useEffect(() => {
    fetchCompany(null);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Dialog fullWidth={true} maxWidth="md" open={isShowPopup} onClose={hidePopup}>
        <DialogTitle
          onClose={hidePopup}
          title={intl.formatMessage({ id: messages.company })}
          showBorder={true}
        />
        <Form className={classes.form}>
          <DialogContent>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Divider />
                <Typography variant="button" className={classes.margin} align="left">
                  {intl.formatMessage({ id: messages.general })}
                </Typography>
                <Divider />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      id="legalName"
                      value={values.legalName}
                      label={intl.formatMessage({ id: messages.legalName })}
                      error={touched.legalName && errors.legalName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 250,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="businessTypeId"
                      name="businessTypeId"
                      value={values.businessTypeId}
                      label={intl.formatMessage({ id: messages.businessType })}
                      error={touched.businessTypeId && errors.businessTypeId}
                      component={FormDropDownField}
                      items={businessTypes}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      name="establishedDate"
                      value={moment(values.establishedDate).format(FORM_DATE_FORMAT.short)}
                      label={intl.formatMessage({ id: messages.establishedDate })}
                      error={touched.establishedDate && errors.establishedDate}
                      component={FormDateField}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      id="description"
                      value={values.description}
                      label={intl.formatMessage({ id: messages.description })}
                      error={touched.description && errors.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 250,
                      }}
                      multiline={true}
                      rows={5}
                    />
                  </GridItem>
                </GridContainer>
                <Divider />
                <Typography variant="button" className={classes.margin} align="left">
                  {intl.formatMessage({ id: messages.address })}
                </Typography>
                <Divider />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="street"
                      value={values.street}
                      label={intl.formatMessage({ id: messages.street })}
                      error={touched.street && errors.street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 250,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="city"
                      value={values.city}
                      label={intl.formatMessage({ id: messages.city })}
                      error={touched.city && errors.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 250,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="provinceId"
                      name="provinceId"
                      value={values.provinceId}
                      label={intl.formatMessage({ id: messages.province })}
                      error={touched.provinceId && errors.provinceId}
                      component={FormDropDownField}
                      items={provinces}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="postalCode"
                      value={values.postalCode}
                      label={intl.formatMessage({ id: messages.postalCode })}
                      error={touched.postalCode && errors.postalCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormMaskedTextField}
                      type="postalCode"
                      placeholder="A9A 9A9"
                    />
                  </GridItem>
                </GridContainer>
                <Divider />
                <Typography variant="button" className={classes.margin} align="left">
                  {intl.formatMessage({ id: messages.bank })}
                </Typography>
                <Divider />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6} />
                </GridContainer>
              </GridItem>
            </GridContainer>
          </DialogContent>
          <DialogActions showBorder={true}>
            <Button
              color="primary"
              type="submit"
              // variant="outlined"
            >
              {intl.formatMessage({ id: messages.save })}
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
};

export const CompanyFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'CompanyForm',
  mapPropsToValues: props => ({
    id: props.company.id || 0,
    legalName: props.company.legalName || '',
    businessTypeId: props.company.businessTypeId || 0,
    establishedDate: props.company.establishedDate || new Date(),
    description: props.company.description || '',
    street: props.company.street || '',
    city: props.company.city || '',
    provinceId: props.company.provinceId || 0,
    postalCode: props.company.postalCode || '',
  }),
  handleSubmit: (values: CompanyState, { props, setSubmitting }: any) => {
    const { updateCompany } = props;
    setSubmitting(false);
    updateCompany(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(CompanyForm);

export const CompanyFormComponent = React.memo(
  injectIntl(withStyles(styles)(CompanyFormWithFormik)),
);
