import React from 'react';

export interface IStateContext {
  count: number;
}

export interface IAppContext {
  appContext: [IStateContext, React.Dispatch<IDispatchAction>];
}

export interface IStateReducer {
  (state: IStateContext, action: IDispatchAction): IStateContext;
}

export interface IDispatchAction {
  type: string;
}

export interface IStateProvider {
  reducer: IStateReducer;
  initialState: IStateContext;
  children: any;
}

