import { AsyncActions, Payload } from '../../store/types';

const REQUEST = 'REQUEST';
const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base: string): any => {
  return [REQUEST, START, SUCCESS, FAILURE].reduce((action: any, type: string): any => {
    action[type] = `${base}_${type}`;
    return action;
  }, {});
};

export const asyncActionCreators = (asyncActions: AsyncActions) => ({
  request: (params: any) => ({ type: asyncActions.REQUEST, params }),
  success: (payload: Payload) => ({ type: asyncActions.SUCCESS, payload }),
  failure: (error: any) => ({
    type: asyncActions.FAILURE,
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
    },
  }),
});
