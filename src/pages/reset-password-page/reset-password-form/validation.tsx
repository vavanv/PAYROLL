import * as yup from 'yup';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  smthIsMandatory: {
    id: 'FORM.VALIDATION.SMTH_IS_MANDATORY',
  },
  smthDoesNotMatch: {
    id: 'FORM.VALIDATION.SMTH_DOES_NOT_MATCH',
  },
  username: {
    id: 'LOGIN_PAGE.USERNAME',
  },
  password: {
    id: 'LOGIN_PAGE.PASSWORD',
  },
  confirmPassword: {
    id: 'LOGIN_PAGE.CONFIRM_PASSWORD',
  },
  company: {
    id: 'LOGIN_PAGE.COMPANY',
  },
  confirmationCode: {
    id: 'LOGIN_PAGE.CONFIRMATION_CODE',
  },
});

export const validationSchema = (intl: any) => {
  return yup.object().shape({
    username: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.username),
      }),
    ),
    company: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.company),
      }),
    ),
    password: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.password),
      }),
    ),
    confirmationCode: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.confirmationCode),
      }),
    ),
    confirmPassword: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.confirmPassword),
        }),
      )
      .oneOf(
        [yup.ref('password')],
        intl.formatMessage(messages.smthDoesNotMatch, {
          smth: intl.formatMessage(messages.password),
        }),
      ),
  });
};
