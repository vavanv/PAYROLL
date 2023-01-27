const application = {
  'APPLICATION.NAME': 'Web payroll',
  'APPLICATION.LOGIN': 'Login to Web payroll ...',
};

const mainPageMenu = {
  'MAIN_PAGE_MENU.HOME': 'Home',
  'MAIN_PAGE_MENU.LOGIN': 'Login',
  'MAIN_PAGE_MENU.SIGNOUT': 'Sign out',
  'MAIN_PAGE_MENU.ABOUT': 'About',
  'MAIN_PAGE_MENU.PROFILE': 'User profile',
  'MAIN_PAGE_MENU.CONTACT_US': 'Contact us',
  'MAIN_PAGE_MENU.COMPANY': 'Company',
  'MAIN_PAGE_MENU.MAIN': 'Main',
  'MAIN_PAGE_MENU.USER': 'User',
  'MAIN_PAGE_MENU.CONFIGURATION': 'Configuration',
};

const loginPage = {
  'LOGIN_PAGE.USERNAME': 'Username',
  'LOGIN_PAGE.PASSWORD': 'Password',
  'LOGIN_PAGE.CONFIRM_PASSWORD': 'Confirm password',
  'LOGIN_PAGE.LOGIN': 'Log in',
  'LOGIN_PAGE.COMPANY': 'Company',
  'LOGIN_PAGE.FORGOT_PASSWORD': 'Forgot password',
  'LOGIN_PAGE.REQUEST_PASSWORD': 'Request password',
  'LOGIN_PAGE.RESET_PASSWORD': 'Reset password',
  'LOGIN_PAGE.CONFIRMATION_CODE': 'Confirmation code',
  'LOGIN_PAGE.FORGOT_PASSWORD_DESCRIPTION':
    'To reset your password, enter company name and username',
  'LOGIN_PAGE.LOGIN_ERROR_TITLE': 'Login error',
};

const profilePage = {
  'PROFILE_PAGE.TITLE': 'Profile',
  'PROFILE_PAGE.USERNAME': 'Username',
  'PROFILE_PAGE.PASSWORD': 'Password',
  'PROFILE_PAGE.FIRST_NAME': 'First name',
  'PROFILE_PAGE.LAST_NAME': 'Last name',
  'PROFILE_PAGE.MIDDLE_NAME': 'Middle name',
  'PROFILE_PAGE.EMAIL': 'Email',
  'PROFILE_PAGE.PHONE_TYPE': 'Phone type',
  'PROFILE_PAGE.PHONE': 'Phone',
  'PROFILE_PAGE.EXT': 'Ext.',
  'PROFILE_PAGE.BUSINESS': 'Business',
  'PROFILE_PAGE.DEPARTMENT': 'Department',
  'PROFILE_PAGE.COUNTRY': 'Country',
  'PROFILE_PAGE.COUNTY': 'County',
  'PROFILE_PAGE.SUB_COUNTY': 'Sub county',
  'PROFILE_PAGE.ADMIN_UNIT': 'Admin unit',
  'PROFILE_PAGE.CITY': 'City',
  'PROFILE_PAGE.STREET': 'Street',
  'PROFILE_PAGE.BUILDING': 'Building',
  'PROFILE_PAGE.FLOOR': 'Floor',
};

const employeePage = {
  'EMPLOYEE_PAGE.EMPLOYEE': 'Employee',
  'EMPLOYEE_PAGE.FIRST_NAME': 'First name',
  'EMPLOYEE_PAGE.LAST_NAME': 'Last name',
  'EMPLOYEE_PAGE.MIDDLE_NAME': 'Middle name',
  'EMPLOYEE_PAGE.BIRTH_DATE': 'Birth date',
  'EMPLOYEE_PAGE.SIN': 'SIN',
  'EMPLOYEE_PAGE.EMAIL': 'Email',
  'EMPLOYEE_PAGE.DATE_OF_HIRE': 'Date of hire',
  'EMPLOYEE_PAGE.DEPARTMENT': 'Department',
  'EMPLOYEE_PAGE.WAGE_TYPE': 'Wage type',
  'EMPLOYEE_PAGE.VACATION_POLICY': 'Vacation policy',
  'EMPLOYEE_PAGE.VACATION_RATE': 'Vacation rate',
  'EMPLOYEE_PAGE.POSITION': 'Position',
  'EMPLOYEE_PAGE.WORK_INFORMATION': 'Work information',
  'EMPLOYEE_PAGE.PERSONAL_INFORMATION': 'Personal information',
};

const employeeListPage = {
  'EMPLOYEE_LIST_PAGE.EMPLOYEES': 'Employees',
};

const companyPage = {
  'COMPANY_PAGE.COMPANY': 'Company',
  'COMPANY_PAGE.GENERAL': 'General',
  'COMPANY_PAGE.ADDRESS': 'Address',
  'COMPANY_PAGE.BANK': 'Bank',
  'COMPANY_PAGE.LEGAL_NAME': 'Legal name',
  'COMPANY_PAGE.ESTABLISHED_DATE': 'Established date',
  'COMPANY_PAGE.DESCRIPTION': 'Description',
  'COMPANY_PAGE.BUSINESS_TYPE': 'Business type',
};

const workSectionSubmit = {
  'WORK_SECTION_SUBMIT.NAME': 'Your name',
  'WORK_SECTION_SUBMIT.EMAIL': 'Your email',
  'WORK_SECTION_SUBMIT.MESSAGE': 'Your message',
  'WORK_SECTION_SUBMIT.SEND': 'Send message',
  'WORK_SECTION_SUBMIT.SEND_COPY': 'Send copy',
};

const formValidationCommon = {
  'FORM.VALIDATION.SMTH_IS_MANDATORY': '{smth} is mandatory',
  'FORM.VALIDATION.WRONG_EMAIL_FORMAT': 'Wrong email format',
  'FORM.VALIDATION.SMTH_DOES_NOT_MATCH': '{smth} does not match',
  'FORM.VALIDATION.SMTH_IS_NOT_VALID': '{smth} is not valid',
};

const address = {
  'ADDRESS.STREET': 'Street',
  'ADDRESS.CITY': 'City',
  'ADDRESS.PROVINCE': 'Province',
  'ADDRESS.POSTAL_CODE': 'Postal code',
};

const buttons = {
  'BUTTONS.OK': 'OK',
  'BUTTONS.YES': 'YES',
  'BUTTONS.CANCEL': 'CANCEL',
  'BUTTONS.SAVE': 'SAVE',
  'BUTTONS.ADD_NEW': 'ADD NEW',
  'BUTTONS.DELETE': 'DELETE',
  'BUTTONS.ADD_SMTH': 'Add {smth}',
};

const dropdowns = {
  'DROPDOWN.SELECT': 'Select ...',
  'DROPDOWN.SELECT_SMTH': 'Select {smth} ...',
};

const dialogMessages = {
  'DIALOG.TITLE_DELETING_SMTH': 'Confirm deleting {smth}',
  'DIALOG.CONFIRM_TO_CONTINUE': 'Are you sure you want to continue?',
};

export const en = {
  ...address,
  ...application,
  ...mainPageMenu,
  ...loginPage,
  ...profilePage,
  ...employeePage,
  ...employeeListPage,
  ...companyPage,
  ...workSectionSubmit,
  ...formValidationCommon,
  ...buttons,
  ...dropdowns,
  ...dialogMessages,
};
