import * as yup from 'yup';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  smthIsMandatory: {
    id: 'FORM.VALIDATION.SMTH_IS_MANDATORY',
  },
  smthIsNotValid: {
    id: 'FORM.VALIDATION.SMTH_IS_NOT_VALID',
  },
  legalName: {
    id: 'COMPANY_PAGE.LEGAL_NAME',
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
  establishedDate: {
    id: 'COMPANY_PAGE.ESTABLISHED_DATE',
  },
  description: {
    id: 'COMPANY_PAGE.DESCRIPTION',
  },
  businessTypeId: {
    id: 'COMPANY_PAGE.BUSINESS_TYPE',
  },
});

export const validationSchema = (intl: any) => {
  return yup.object().shape({
    legalName: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.legalName),
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
    establishedDate: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.establishedDate),
      }),
    ),
    description: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.description),
      }),
    ),
    businessTypeId: yup
      .number()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.businessTypeId),
        }),
      )
      .moreThan(
        0,
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.businessTypeId),
        }),
      ),
  });
};
