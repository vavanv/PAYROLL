import { assoc } from 'ramda';

import { SUBMIT_WORK_SECTION } from '../../../pages/landing-page/actions';
import { UILandingPageState } from '../../../store/ui/landing-page/types';
import { AnyAction } from '../../../store/types';

export const initialState: UILandingPageState = {
  loading: false,
};

const reducer = (state = initialState, action: AnyAction): UILandingPageState => {
  switch (action.type) {
    case SUBMIT_WORK_SECTION.REQUEST:
      return assoc('loading', true, state);
    case SUBMIT_WORK_SECTION.SUCCESS:
    case SUBMIT_WORK_SECTION.FAILURE:
      return assoc('loading', false, state);
    default:
      return state;
  }
};

export { reducer as uiLandingPageReducer };
