import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { submitWorkSectionRequestAction } from '../../../../pages/landing-page/actions';

import { ContactUsInfoComponent } from '../../../../pages/contact-us-page/sections/contact-us-info/component';
import { isLandingPageLoading } from '../../../../features/ui/selectors';
import { AppState } from '../../../../store/types';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    loading: boolean;
  }
>({
  loading: isLandingPageLoading,
});

const mapDispatchToProps = {
  submitWorkSectionRequestAction: submitWorkSectionRequestAction.request,
};

export const ContactUsInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactUsInfoComponent);
