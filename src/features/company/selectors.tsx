import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { CompanyState } from '../../store/company/types';

export const getCompany = (state: AppState): CompanyState => state.company;

export const getCompanyInfo = createSelector(getCompany, (company: CompanyState) => company);
