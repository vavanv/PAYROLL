import { mergeAll } from 'ramda';

import { LOGOUT } from '../../features/user/actions';
import { CompanyState } from '../../store/company/types';
import { AnyAction } from '../../store/types';
import { FETCH_COMPANY } from './actions';

export const initialState: CompanyState = {
  id: 0,
  legalName: '',
  street: '',
  city: '',
  provinceId: 0,
  postalCode: '',
  businessTypeId: 0,
  establishedDate: new Date(),
  description: '',
};

const reducer = (state = initialState, action: AnyAction): CompanyState => {
  switch (action.type) {
    case FETCH_COMPANY.SUCCESS: {
      return mergeAll([state, action.payload]);
    }
    case LOGOUT:
    case FETCH_COMPANY.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as companyReducer };
