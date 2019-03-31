import React from 'react';

export interface RedditState {
  isFetching: boolean;
  fetchResult?: {
    success?: {
      fetchedAt: number;
      subreddits: { title: string; url: string; }[];
    }
    errorMsg?: string;
  }
}

export interface RedditAction {
  type: string;
  reddit: RedditState;
}

export interface CounterState {
  count: number;
}

export interface CounterAction {
  type: string;
}

export type IDispatchAction = RedditAction | CounterAction;

export interface IStateContext {
  reddit: RedditState;
  counter: CounterState;
}

export interface IAppContext {
  appContext: [IStateContext, React.Dispatch<IDispatchAction>];
}

export interface IStateReducer {
  (state: IStateContext, action: IDispatchAction): IStateContext;
}

export interface IStateProvider {
  reducer: IStateReducer;
  initialState: IStateContext;
  children: any;
}

