import { IDispatchAction } from './types';

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const increment: IDispatchAction = {
  type: ACTIONS.INCREMENT
};

export const decrement: IDispatchAction = {
  type: ACTIONS.DECREMENT
};

