import * as yup from 'yup';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  smthIsMandatory: {
    id: 'FORM.VALIDATION.SMTH_IS_MANDATORY',
  },
  username: {
    id: 'LOGIN_PAGE.USERNAME',
  },
  password: {
    id: 'LOGIN_PAGE.PASSWORD',
  },
  company: {
    id: 'LOGIN_PAGE.COMPANY',
  },
});

export const validationSchema = (intl: any) => {
  return yup.object().shape({
    username: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.username),
      }),
    ),
    password: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.password),
      }),
    ),
    company: yup.string().required(
      intl.formatMessage(messages.smthIsMandatory, {
        smth: intl.formatMessage(messages.company),
      }),
    ),
  });
};
