import { createSelector } from 'reselect';
import * as R from 'ramda';

import { MASTER_LIST_TYPE } from '../../api/master-list/constants';
import { AppState } from '../../store/types';
import { MasterListItemsState, MasterListItems } from '../../store/master-list/types';

export const masterListStateSelector = (state: AppState): MasterListItemsState => state.masterList;

export const getMasterListItemsState = createSelector(
  masterListStateSelector,
  (masterList: MasterListItemsState): MasterListItems => masterList.items,
);

export const getMasterListBusinessTypes = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.businessType, items),
);

export const getMasterListProvinces = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.province, items),
);

export const getMasterListVacationPolicies = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.vacationPolicy, items),
);

export const getMasterListWageTypes = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.wageType, items),
);

export const getMasterListWageDepartments = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.department, items),
);

export const getMasterListPositions = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.position, items),
);

// TO BE REMOVED
export const getMasterListCountries = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.businessType, items),
);

export const getMasterListPhoneContactTypes = createSelector(
  getMasterListItemsState,
  (items: MasterListItems): MasterListItems =>
    R.filter(item => item.typeId === MASTER_LIST_TYPE.province, items),
);
