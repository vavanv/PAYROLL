import * as React from 'react';
import moment from 'moment';
import { withFormik, FastField as Field, Form, FormikProps } from 'formik';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import {
  Divider,
  Dialog,
  DialogContent,
  Typography,
  Button,
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
  ModalConfirmation,
  DialogTitle,
  DialogActions,
} from '../../../components';
import { EmployeeState } from '../../../store/employee/types';
import { MasterListItem } from '../../../store/master-list/types';
import { FORM_DATE_FORMAT } from '../../../utils/common/constants';

import { validationSchema } from './validation';

import { styles } from './styles';
import { messages } from './messages';

interface Props extends WithStyles<typeof styles>, InjectedIntlProps {
  employee: EmployeeState;
  provinces: MasterListItem[];
  departments: MasterListItem[];
  wageTypes: MasterListItem[];
  vacationPolicies: MasterListItem[];
  positions: MasterListItem[];
  isShowPopup: boolean;
  updateEmployee: (values: any) => void;
  deleteEmployee: (id: number) => void;
  fetchEmployee: (params: any) => void;
  hidePopup: () => void;
}

type FormValues = EmployeeState;

interface InitialFormValues extends EmployeeState, Props {}

const EmployeeForm = (props: Props & FormikProps<FormValues>) => {
  const {
    classes,
    fetchEmployee,
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    provinces,
    departments,
    wageTypes,
    vacationPolicies,
    positions,
    isShowPopup,
    hidePopup,
    intl,
  } = props;

  const [confirmOpen, setConfirmOpen] = React.useState(false);

  React.useEffect(() => {
    fetchEmployee(null);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Dialog fullWidth={true} maxWidth="md" open={isShowPopup} onClose={hidePopup}>
        <DialogTitle
          onClose={hidePopup}
          title={intl.formatMessage({ id: messages.employee })}
          showBorder={true}
        />
        <Form className={classes.form}>
          <DialogContent>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Divider />
                <Typography variant="button" className={classes.margin} align="left">
                  {intl.formatMessage({ id: messages.personalInformation })}
                </Typography>
                <Divider />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="firstName"
                      value={values.firstName}
                      label={intl.formatMessage({ id: messages.firstName })}
                      error={touched.firstName && errors.firstName}
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
                      id="lastName"
                      value={values.lastName}
                      label={intl.formatMessage({ id: messages.lastName })}
                      error={touched.lastName && errors.lastName}
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
                      id="middleName"
                      value={values.middleName}
                      label={intl.formatMessage({ id: messages.middleName })}
                      error={touched.middleName && errors.middleName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 250,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} />
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      name="birthDate"
                      value={moment(values.birthDate).format(FORM_DATE_FORMAT.short)}
                      label={intl.formatMessage({ id: messages.birthDate })}
                      error={touched.birthDate && errors.birthDate}
                      component={FormDateField}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="sin"
                      value={values.sin}
                      label={intl.formatMessage({ id: messages.sin })}
                      error={touched.sin && errors.sin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormMaskedTextField}
                      type="sin"
                      placeholder="999-999-999"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="email"
                      value={values.email}
                      label={intl.formatMessage({ id: messages.email })}
                      error={touched.email && errors.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="text"
                      inputProps={{
                        maxLength: 50,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} />
                </GridContainer>
                <Divider />
                <Typography variant="button" className={classes.margin} align="left">
                  {intl.formatMessage({ id: messages.workInformation })}
                </Typography>
                <Divider />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="departmentId"
                      name="departmentId"
                      value={values.departmentId}
                      label={intl.formatMessage({ id: messages.department })}
                      error={touched.departmentId && errors.departmentId}
                      component={FormDropDownField}
                      items={departments}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="positionId"
                      name="positionId"
                      value={values.positionId}
                      label={intl.formatMessage({ id: messages.position })}
                      error={touched.positionId && errors.positionId}
                      component={FormDropDownField}
                      items={positions}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      name="dateOfHire"
                      value={moment(values.dateOfHire).format(FORM_DATE_FORMAT.short)}
                      label={intl.formatMessage({ id: messages.dateOfHire })}
                      error={touched.dateOfHire && errors.dateOfHire}
                      component={FormDateField}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="wageTypeId"
                      name="wageTypeId"
                      value={values.wageTypeId}
                      label={intl.formatMessage({ id: messages.wageType })}
                      error={touched.wageTypeId && errors.wageTypeId}
                      component={FormDropDownField}
                      items={wageTypes}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="vacationPolicyId"
                      name="vacationPolicyId"
                      value={values.vacationPolicyId}
                      label={intl.formatMessage({ id: messages.vacationPolicy })}
                      error={touched.vacationPolicyId && errors.vacationPolicyId}
                      component={FormDropDownField}
                      items={vacationPolicies}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      id="vacationRate"
                      value={values.vacationRate}
                      label={intl.formatMessage({ id: messages.vacationRate })}
                      error={touched.vacationRate && errors.vacationRate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={FormTextField}
                      type="number"
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
              </GridItem>
            </GridContainer>
            {confirmOpen && (
              <ModalConfirmation
                open={true}
                title="Please confirm"
                message="Delete employee?"
                handleCancel={() => setConfirmOpen(false)}
                handleOK={() => {
                  props.deleteEmployee((values.id = values.id ? values.id : 0));
                }}
              />
            )}
          </DialogContent>
          <DialogActions showBorder={true}>
            <Button
              color="primary"
              disabled={values && !values.id}
              onClick={() => setConfirmOpen(true)}
            >
              {intl.formatMessage({ id: messages.delete })}
            </Button>
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

export const EmployeeFormWithFormik = withFormik<InitialFormValues, FormValues>({
  enableReinitialize: true,
  displayName: 'EmployeeForm',
  mapPropsToValues: props => ({
    id: props.employee.id || 0,
    userId: props.employee.userId || 0,
    username: props.employee.username || '',
    password: props.employee.password || '',
    userEnabled: props.employee.userEnabled || false,
    userRightId: props.employee.userRightId || 0,
    firstName: props.employee.firstName || '',
    lastName: props.employee.lastName || '',
    middleName: props.employee.middleName || '',
    birthDate: props.employee.birthDate || new Date(),
    sin: props.employee.sin || '',
    email: props.employee.email || '',
    dateOfHire: props.employee.dateOfHire || new Date(),
    departmentId: props.employee.departmentId || 0,
    positionId: props.employee.positionId || 0,
    wageTypeId: props.employee.wageTypeId || 0,
    vacationPolicyId: props.employee.vacationPolicyId || 0,
    vacationRate: props.employee.vacationRate || 0,
    addressId: props.employee.addressId || 0,
    street: props.employee.street || '',
    city: props.employee.city || '',
    provinceId: props.employee.provinceId || 0,
    postalCode: props.employee.postalCode || '',
    isDeleted: props.employee.isDeleted || false,
  }),
  handleSubmit: (values: EmployeeState, { props, setSubmitting }: any) => {
    const { updateEmployee } = props;
    setSubmitting(false);
    updateEmployee(values);
  },
  validationSchema: ({ intl }: any) => validationSchema(intl),
})(EmployeeForm);

export const EmployeeFormComponent = React.memo(
  injectIntl(withStyles(styles)(EmployeeFormWithFormik)),
);
