import * as yup from 'yup';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  smthIsMandatory: {
    id: 'FORM.VALIDATION.SMTH_IS_MANDATORY',
  },
  name: {
    id: 'WORK_SECTION_SUBMIT.NAME',
  },
  email: {
    id: 'WORK_SECTION_SUBMIT.EMAIL',
  },
  message: {
    id: 'WORK_SECTION_SUBMIT.MESSAGE',
  },
  wrongEmailFormat: {
    id: 'FORM.VALIDATION.WRONG_EMAIL_FORMAT',
  },
});

export const validationSchema = (intl: any) => {
  return yup.object().shape({
    name: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.name),
        }),
      ),
    message: yup
      .string()
      .required(
        intl.formatMessage(messages.smthIsMandatory, {
          smth: intl.formatMessage(messages.message),
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
  });
};
