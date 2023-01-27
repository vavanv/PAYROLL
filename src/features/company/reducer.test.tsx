import { CompanyState } from '../../store/company/types';
import { FETCH_COMPANY } from '../../features/company/actions';
import { LOGOUT } from '../../features/user/actions';
import { initialState, companyReducer as reducer } from './reducer';

describe('company reducer', () => {
  const state: CompanyState = initialState;

  it('returns the initial state correctly', () => {
    const r = reducer(undefined, { type: 'TYPE' });

    expect(r).toEqual(state);
  });

  it('handles FETCH_COMPANY.SUCCESS as expected', () => {
    const r = reducer(initialState, {
      type: FETCH_COMPANY.SUCCESS,
      payload: {
        id: 1,
        legalName: 'name',
        street: 'street',
        city: 'city',
        provinceId: 1,
        postalCode: 'M2R2C2',
        businessTypeId: 2,
        establishedDate: new Date('2010-08-18T00:00:00'),
        description: 'description',
      },
    });

    expect(r).toEqual({
      id: 1,
      legalName: 'name',
      street: 'street',
      city: 'city',
      provinceId: 1,
      postalCode: 'M2R2C2',
      businessTypeId: 2,
      establishedDate: new Date('2010-08-18T00:00:00'),
      description: 'description',
    });
  });

  it('handles FETCH_COMPANY.FAILURE as expected', () => {
    const r = reducer(initialState, { type: FETCH_COMPANY.FAILURE });

    expect(r).toEqual(state);
  });

  it('handles FETCH_COMPANY.FAILURE as expected', () => {
    const r = reducer(initialState, { type: LOGOUT });

    expect(r).toEqual(state);
  });
});
