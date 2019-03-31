import {
  IStateContext,
  RedditState,
  RedditAction,
  CounterState,
  CounterAction,
  IStateReducer
} from './types'
import { ACTIONS } from './actions';

export const initialStateCtx: IStateContext = {
  counter: { count: 0 },
  reddit: { isFetching: false, fetchResult: {} }
};

const counter = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const reddit = (state: RedditState, action: RedditAction): RedditState => {
  switch (action.type) {
    case ACTIONS.REDDIT_FETCH_START:
      return {
        isFetching: action.reddit.isFetching,
        fetchResult: undefined
      };
    case ACTIONS.REDDIT_FETCH_FAIL:
    case ACTIONS.REDDIT_FETCH_SUCCESS:
      return {
        isFetching: action.reddit.isFetching,
        fetchResult: action.reddit.fetchResult
      }
    default:
      return state;
  }
};

export const rootReducer: IStateReducer = (state, action) => ({
  counter: counter(state.counter, <CounterAction>action),
  reddit: reddit(state.reddit, <RedditAction>action)
});
