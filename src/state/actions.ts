import { CounterAction, RedditAction } from './types';

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REDDIT_FETCH_START: '1',
  REDDIT_FETCH_SUCCESS: '2',
  REDDIT_FETCH_FAIL: '3'
};

export const increment: CounterAction = {
  type: ACTIONS.INCREMENT
};

export const decrement: CounterAction = {
  type: ACTIONS.DECREMENT
};

export const fetchStart = (): RedditAction => ({
  type: ACTIONS.REDDIT_FETCH_START,
  reddit: {
    isFetching: true
  }
});

export const fetchSuccess = (responsePayload: { title: string; url: string; }[]): RedditAction => ({
  type: ACTIONS.REDDIT_FETCH_SUCCESS,
  reddit: {
    isFetching: false,
    fetchResult: {
      success: {
        fetchedAt: (new Date()).getTime(),
        subreddits: responsePayload
      }
    }
  }
});

export const fetchFail = (errorMsg: string): RedditAction => ({
  type: ACTIONS.REDDIT_FETCH_FAIL,
  reddit: {
    isFetching: false,
    fetchResult: {
      errorMsg
    }
  }
});

