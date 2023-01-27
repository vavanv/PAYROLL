import * as yup from 'yup';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  smthIsMandatory: {
    id: 'FORM.VALIDATION.SMTH_IS_MANDATORY',
  },
  smthIsNotValid: {
    id: 'FORM.VALIDATION.SMTH_IS_NOT_VALID',
  },
  firstName: {
    id: 'EMPLOYEE_PAGE.FIRST_NAME',
  },
  lastName: {
    id: 'EMPLOYEE_PAGE.LAST_NAME',
  },
  birthDate: {
    id: 'EMPLOYEE_PAGE.BIRTH_DATE',
  },
  sin: {
    id: 'EMPLOYEE_PAGE.SIN',
  },
  email: {
    id: 'EMPLOYEE_PAGE.EMAIL',
  },
  wrongEmailFormat: {
    id: 'FORM.VALIDATION.WRONG_EMAIL_FORMAT',
  },
  dateOfHire: {
    id: 'EMPLOYEE_PAGE.DATE_OF_HIRE',
  },
  departmentId: {
    id: 'EMPLOYEE_PAGE.DEPARTMENT',
  },
  positionId: {
    id: 'EMPLOYEE_PAGE.POSITION',
  },
  wageTypeId: {
    id: 'EMPLOYEE_PAGE.WAGE_TYPE',
  },
  vacationPolicyId: {
    id: 'EMPLOYEE_PAGE.VACATION_POLICY',
  },
  street: {
    id: 'ADDRESS.STREET',
  },
  city: {
    id: 'ADDRESS.CITY',
  },
  provinceId: {
    id: 'ADDRESS.PROVINCE',
  },
  postalCode: {
    id: 'ADDRESS.POSTAL_CODE',
  },
});

export const validationSchema = (intl: any) => {
  return yup.object().shape({
    firstName: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.firstName),
      }),
    ),
    lastName: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.lastName),
      }),
    ),
    birthDate: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.birthDate),
      }),
    ),
    sin: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.sin),
        }),
      )
      .matches(
        /^(\d{3}-\d{3}-\d{3})|(\d{9})$/,
        intl.formatMessage(messages.smthIsNotValid, {
          smth: intl.formatMessage(messages.sin),
        }),
      ),
    email: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.email),
        }),
      )
      .email(intl.formatMessage(messages.wrongEmailFormat)),
    dateOfHire: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.dateOfHire),
      }),
    ),
    departmentId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.departmentId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.departmentId),
        }),
      ),
    positionId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.positionId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.positionId),
        }),
      ),
    wageTypeId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.wageTypeId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.wageTypeId),
        }),
      ),
    vacationPolicyId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.vacationPolicyId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.vacationPolicyId),
        }),
      ),
    street: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.street),
      }),
    ),
    city: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.city),
      }),
    ),
    provinceId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.provinceId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.provinceId),
        }),
      ),
    postalCode: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.postalCode),
        }),
      )
      .matches(
        /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
        intl.formatMessage(messages.smthIsNotValid, {
          smth: intl.formatMessage(messages.postalCode),
        }),
      ),
  });
};
