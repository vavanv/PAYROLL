import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { updateCompanyAction, fetchCompanyAction } from '../../../features/company/actions';
import {
  getMasterListProvinces,
  getMasterListBusinessTypes,
} from '../../../features/master-list/selectors';
import { isShowPopup } from '../../../features/ui/selectors';
import { hidePopupAction as hidePopup } from '../../../features/navigation/actions';
import { getCompanyInfo } from '../../../features/company/selectors';
import { MasterListItems } from '../../../store/master-list/types';
import { CompanyState } from '../../../store/company/types';
import { AppState } from '../../../store/types';

import { CompanyFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    provinces: MasterListItems;
    businessTypes: MasterListItems;
    company: CompanyState;
    isShowPopup: boolean;
  }
>({
  provinces: getMasterListProvinces,
  businessTypes: getMasterListBusinessTypes,
  company: getCompanyInfo,
  isShowPopup: isShowPopup,
});

const mapDispatchToProps = {
  updateCompany: updateCompanyAction.request,
  fetchCompany: fetchCompanyAction.request,
  hidePopup,
};

export const CompanyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyFormComponent);
