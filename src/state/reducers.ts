import { IStateReducer, IStateContext } from './types'
import { ACTIONS } from './actions';

export const initialStateCtx: IStateContext = {
  count: 0
};

export const reducer : IStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};